import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog';

const categoryColors: Record<string, string> = {
  'UX': 'bg-violet-100 text-violet-700',
  'Development': 'bg-sky-100 text-sky-700',
  'Case Study': 'bg-amber-100 text-amber-700',
  'General': 'bg-gray-100 text-gray-600',
};

export function BlogCard({ post }: { post: BlogPostMeta }) {
  const colorClass = categoryColors[post.category] ?? categoryColors['General'];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full"
      aria-label={`Read: ${post.title}`}
    >
      <article className="blog-card flex flex-col h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-lg hover:-translate-y-1 hover:border-foreground/10">
        {/* Category Badge */}
        <div className="mb-4">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${colorClass}`}>
            <Tag className="h-3 w-3" />
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold leading-snug text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-1">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-foreground/40 border-t border-border pt-4 mt-auto">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.formattedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} min read
          </span>
        </div>
      </article>
    </Link>
  );
}
