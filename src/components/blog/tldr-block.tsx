import { Lightbulb } from 'lucide-react';

interface TLDRBlockProps {
  summary: string;
  points: string[];
}

export function TLDRBlock({ summary, points }: TLDRBlockProps) {
  return (
    <div
      className="my-8 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6"
      role="note"
      aria-label="TL;DR — Quick Summary"
    >
      <div className="mb-3 flex items-center gap-2">
        <Lightbulb className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          TL;DR
        </span>
      </div>
      <p className="mb-5 leading-relaxed text-foreground/80 text-sm sm:text-base">
        {summary}
      </p>
      <ul className="space-y-2.5" aria-label="Key points">
        {points.map((point, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed"
          >
            <span
              className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
