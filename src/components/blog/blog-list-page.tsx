'use client';

import { useState } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { BlogCard } from './blog-card';
import type { BlogPostMeta } from '@/lib/blog';

const CATEGORIES = ['All', 'UX', 'Development', 'Case Study'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const MotionDiv = motion.div as React.FC<HTMLMotionProps<'div'> & { className?: string }>;

export function BlogListPage({ posts }: { posts: BlogPostMeta[] }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-4">
              Writing
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Blog
            </h1>
            <p className="text-lg text-foreground/60 max-w-lg">
              Thoughts on design, development, and building products that actually work.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-5xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-2"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  activeCategory === cat
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-foreground/60 hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-foreground/40 py-20">
              No posts in this category yet.
            </p>
          ) : (
            <MotionDiv
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((post) => (
                <MotionDiv key={post.slug} variants={itemVariants}>
                  <BlogCard post={post} />
                </MotionDiv>
              ))}
            </MotionDiv>
          )}
        </div>
      </section>
    </div>
  );
}
