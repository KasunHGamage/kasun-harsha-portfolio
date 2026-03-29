'use client';

import { useState, useEffect } from 'react';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface HelpfulFeedbackProps {
  slug: string;
}

type Vote = 'yes' | 'no' | null;

export function HelpfulFeedback({ slug }: HelpfulFeedbackProps) {
  const storageKey = `blog-helpful-${slug}`;
  const [vote, setVote] = useState<Vote>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey) as Vote;
    if (stored) {
      setVote(stored);
      setSubmitted(true);
    }
  }, [storageKey]);

  const handleVote = (v: 'yes' | 'no') => {
    if (submitted) return;
    setVote(v);
    setSubmitted(true);
    localStorage.setItem(storageKey, v);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 py-5 border-t border-border">
      <p className="text-sm text-foreground/60 font-medium">
        Was this article helpful?
      </p>

      {submitted ? (
        <p className="text-sm text-primary font-medium animate-fade-in">
          {vote === 'yes' ? '🙏 Thanks for the feedback!' : '💬 Noted — I\'ll improve it.'}
        </p>
      ) : (
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleVote('yes')}
            aria-label="Yes, this was helpful"
            className="helpful-btn"
          >
            <ThumbsUp className="h-4 w-4" />
            <span>Yes</span>
          </button>
          <button
            onClick={() => handleVote('no')}
            aria-label="No, this wasn't helpful"
            className="helpful-btn"
          >
            <ThumbsDown className="h-4 w-4" />
            <span>No</span>
          </button>
        </div>
      )}
    </div>
  );
}
