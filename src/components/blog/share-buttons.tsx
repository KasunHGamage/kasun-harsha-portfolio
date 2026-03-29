'use client';

import { useState } from 'react';
import { Link2, Check, Twitter, Linkedin } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const url =
    typeof window !== 'undefined'
      ? window.location.href
      : `https://kasunharsha.com/blog/${slug}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for browsers that don't support clipboard API
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(`https://kasunharsha.com/blog/${slug}`)}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://kasunharsha.com/blog/${slug}`)}&title=${encodeURIComponent(title)}`;

  return (
    <div className="flex items-center gap-1.5" aria-label="Share this post">
      <span className="mr-1 text-xs font-medium text-foreground/40">Share</span>

      <button
        onClick={handleCopy}
        aria-label={copied ? 'Link copied!' : 'Copy link'}
        title={copied ? 'Copied!' : 'Copy link'}
        className="share-btn"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-primary" />
        ) : (
          <Link2 className="h-3.5 w-3.5" />
        )}
      </button>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        title="Share on X"
        className="share-btn"
      >
        <Twitter className="h-3.5 w-3.5" />
      </a>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        className="share-btn"
      >
        <Linkedin className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
