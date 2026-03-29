import type { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BlogListPage } from '@/components/blog/blog-list-page';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog | Kasun Harsha',
  description:
    'Thoughts on design, development, and building products that actually work — by Kasun Harsha, UI/UX Designer & Frontend Developer.',
  keywords: 'UX design blog, frontend development Sri Lanka, product design, Kasun Harsha blog',
  alternates: { canonical: 'https://kasunharsha.com/blog' },
  openGraph: {
    title: 'Blog | Kasun Harsha',
    description: 'Thoughts on design, development, and building products that actually work.',
    url: 'https://kasunharsha.com/blog',
    type: 'website',
    images: 'https://kasunharsha.com/og-image.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Kasun Harsha',
    description: 'Thoughts on design, development, and building products that actually work.',
    images: 'https://kasunharsha.com/og-image.png',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <BlogListPage posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
