'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight, RefreshCw } from 'lucide-react';
import { TableOfContents } from './table-of-contents';
import { BlogCard } from './blog-card';
import { TLDRBlock } from './tldr-block';
import { KeyTakeaways } from './key-takeaways';
import { FAQSection } from './faq-section';
import { ShareButtons } from './share-buttons';
import { HelpfulFeedback } from './helpful-feedback';
import type { BlogPost, BlogPostMeta } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  UX: 'bg-violet-100 text-violet-700',
  Development: 'bg-sky-100 text-sky-700',
  'Case Study': 'bg-amber-100 text-amber-700',
  General: 'bg-gray-100 text-gray-600',
};

const MotionDiv = motion.div as React.FC<HTMLMotionProps<'div'> & { className?: string }>;

interface BlogPostPageProps {
  post: BlogPost;
  mdxContent: React.ReactNode;
  relatedPosts: BlogPostMeta[];
}

export function BlogPostPage({ post, mdxContent, relatedPosts }: BlogPostPageProps) {
  const colorClass = categoryColors[post.category] ?? categoryColors['General'];

  return (
    <div className="min-h-screen bg-background">

      {/* Back Link */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>
        </div>
      </nav>

      {/* Article wrapper — semantic landmark for AI + screen readers */}
      <article itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="datePublished" content={post.date} />
        {post.updatedAt && <meta itemProp="dateModified" content={post.updatedAt} />}
        <meta itemProp="author" content="Kasun Harsha" />
        <meta itemProp="keywords" content={post.tags.join(', ')} />

        {/* Post Header */}
        <header className="px-4 sm:px-6 lg:px-8 pt-10 pb-8">
          <div className="max-w-5xl mx-auto">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Category badge */}
              <div className="mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${colorClass}`}
                  itemProp="articleSection"
                >
                  <Tag className="h-3 w-3" aria-hidden="true" />
                  {post.category}
                </span>
              </div>

              {/* H1 — one per page */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-5 max-w-3xl"
                itemProp="headline"
              >
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-foreground/60 max-w-2xl mb-8 leading-relaxed" itemProp="description">
                {post.description}
              </p>

              {/* Meta bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex flex-wrap items-center gap-5 text-sm text-foreground/50">
                  <span className="font-semibold text-foreground" itemProp="author">Kasun Harsha</span>

                  <span className="flex items-center gap-1.5" title={`Published ${post.formattedDate}`}>
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    <time dateTime={post.date}>{post.formattedDate}</time>
                  </span>

                  {post.formattedUpdatedAt && post.updatedAt !== post.date && (
                    <span className="flex items-center gap-1.5 text-primary/70" title={`Updated ${post.formattedUpdatedAt}`}>
                      <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                      <time dateTime={post.updatedAt}>Updated {post.formattedUpdatedAt}</time>
                    </span>
                  )}

                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {post.readingTime} min read
                  </span>
                </div>

                {/* Share buttons */}
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
            </MotionDiv>
          </div>
        </header>

        {/* TL;DR block — answer-first for AI parsers */}
        {post.tldr && post.tldrPoints && post.tldrPoints.length > 0 && (
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <TLDRBlock summary={post.tldr} points={post.tldrPoints} />
            </div>
          </div>
        )}

        {/* Cover Image */}
        {post.coverImage && (
          <div className="px-4 sm:px-6 lg:px-8 mt-6 mb-10">
            <div className="max-w-5xl mx-auto">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{ paddingBottom: '42.85%' }}
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  itemProp="image"
                />
              </div>
            </div>
          </div>
        )}

        {/* Content + TOC layout */}
        <div className="px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-5xl mx-auto">
            <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-12">

              {/* Main article body */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-0"
              >
                <section
                  aria-label="Article content"
                  className="prose-blog"
                  itemProp="articleBody"
                >
                  {mdxContent}
                </section>

                {/* Key Takeaways — scannable summary for AI */}
                {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                  <KeyTakeaways items={post.keyTakeaways} />
                )}

                {/* FAQ Section — critical for featured snippets */}
                {post.faq && post.faq.length > 0 && (
                  <FAQSection faqs={post.faq} />
                )}

                {/* Post meta footer */}
                <div className="mt-10 pt-2">
                  {/* Was this helpful */}
                  <HelpfulFeedback slug={post.slug} />

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/60"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </MotionDiv>

              {/* Sticky TOC sidebar */}
              <aside className="hidden lg:block" aria-label="Table of contents">
                <div className="sticky top-24">
                  <TableOfContents content={post.content} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Divider */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto border-t border-border" />
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <aside aria-label="Related posts" className="px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-foreground mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </aside>
      )}

      {/* CTA */}
      <section aria-label="Portfolio CTA" className="px-4 sm:px-6 lg:px-8 py-16 bg-secondary">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-foreground/50 text-sm uppercase tracking-widest font-semibold mb-3">
            Enjoyed this?
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            See my work in action
          </h2>
          <p className="text-foreground/60 mb-8 max-w-md mx-auto">
            I design and build digital products. Check out my portfolio to see case studies and projects.
          </p>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity duration-200"
          >
            View my work
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
