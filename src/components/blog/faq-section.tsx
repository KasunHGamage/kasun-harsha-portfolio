import type { FAQ } from '@/lib/blog';

interface FAQSectionProps {
  faqs: FAQ[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section aria-labelledby="faq-heading" className="mt-16 mb-4">
      <h2
        id="faq-heading"
        className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
      >
        <span
          className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold"
          aria-hidden="true"
        >
          ?
        </span>
        Frequently Asked Questions
      </h2>

      <div className="space-y-0" itemScope itemType="https://schema.org/FAQPage">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border-b border-border py-6 last:border-0"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h3
              className="text-base font-semibold text-foreground mb-3 leading-snug"
              itemProp="name"
            >
              {faq.question}
            </h3>
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p
                className="text-sm text-foreground/70 leading-relaxed"
                itemProp="text"
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
