import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedAt?: string;
  formattedDate: string;
  formattedUpdatedAt?: string;
  category: string;
  tags: string[];
  coverImage?: string;
  readingTime: number;
  content: string;
  // AI-optimisation fields
  tldr?: string;
  tldrPoints?: string[];
  keyTakeaways?: string[];
  faq?: FAQ[];
}

export interface BlogPostMeta extends Omit<BlogPost, 'content'> {}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 230;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function parsePost(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? 'Untitled',
    description: data.description ?? '',
    date: data.date ?? new Date().toISOString(),
    updatedAt: data.updatedAt ?? undefined,
    formattedDate: formatDate(data.date ?? new Date().toISOString()),
    formattedUpdatedAt: data.updatedAt ? formatDate(data.updatedAt) : undefined,
    category: data.category ?? 'General',
    tags: data.tags ?? [],
    coverImage: data.coverImage ?? undefined,
    readingTime: calculateReadingTime(content),
    content,
    tldr: data.tldr ?? undefined,
    tldrPoints: data.tldrPoints ?? undefined,
    keyTakeaways: data.keyTakeaways ?? undefined,
    faq: data.faq ?? undefined,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const { content: _, ...meta } = parsePost(slug);
    return meta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    return parsePost(slug);
  } catch {
    return null;
  }
}

/** Scores posts by tag overlap (2pts each) + category match (1pt). */
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags: string[],
  limit = 2
): BlogPostMeta[] {
  const all = getAllPosts().filter((p) => p.slug !== currentSlug);

  const scored = all.map((p) => {
    const tagOverlap = p.tags.filter((t) => tags.includes(t)).length;
    const categoryMatch = p.category === category ? 1 : 0;
    return { post: p, score: tagOverlap * 2 + categoryMatch };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.post);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats);
}
