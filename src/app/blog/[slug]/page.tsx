import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { BlogPostPage } from '@/components/blog/blog-post-page';
import Header from '@/components/header';
import Footer from '@/components/footer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const siteUrl = 'https://kasunharsha.com';
  const url = `${siteUrl}/blog/${slug}`;
  const ogImage = post.coverImage ?? `${siteUrl}/og-image.png`;
  const modifiedTime = post.updatedAt ?? post.date;

  return {
    title: `${post.title} | Kasun Harsha`,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: 'Kasun Harsha', url: siteUrl }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime,
      authors: ['https://kasunharsha.com'],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@kasunharsha',
      images: [ogImage],
    },
    other: {
      'article:author': 'Kasun Harsha',
      'article:section': post.category,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(slug, post.category, post.tags, 2);

  const siteUrl = 'https://kasunharsha.com';
  const postUrl = `${siteUrl}/blog/${slug}`;
  const ogImage = post.coverImage ?? `${siteUrl}/og-image.png`;

  // Full BlogPosting JSON-LD with mainEntityOfPage
  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    author: {
      '@type': 'Person',
      name: 'Kasun Harsha',
      url: siteUrl,
      sameAs: [
        'https://www.linkedin.com/in/kasunharsha',
        'https://twitter.com/kasunharsha',
      ],
    },
    publisher: {
      '@type': 'Person',
      name: 'Kasun Harsha',
      url: siteUrl,
    },
    url: postUrl,
    image: {
      '@type': 'ImageObject',
      url: ogImage,
      width: 1200,
      height: 630,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en',
    wordCount: post.content.trim().split(/\s+/).length,
  };

  // FAQ Page JSON-LD (only if post has faq data)
  const faqLd = post.faq && post.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  // Render MDX server-side using RSC
  const mdxContent = (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'append',
                properties: {
                  'data-heading-anchor': '',
                  'aria-label': 'Link to section',
                  tabIndex: -1,
                },
              },
            ],
          ],
        },
      }}
    />
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <BlogPostPage
            post={post}
            mdxContent={mdxContent}
            relatedPosts={relatedPosts}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
