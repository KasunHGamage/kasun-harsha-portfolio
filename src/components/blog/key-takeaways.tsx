import { CheckCircle2 } from 'lucide-react';

interface KeyTakeawaysProps {
  items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <aside
      aria-label="Key Takeaways"
      className="my-10 rounded-2xl border border-border bg-secondary p-6"
    >
      <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/60">
        <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
        Key Takeaways
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-foreground/75 leading-relaxed"
          >
            <CheckCircle2
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
