"use client";

import ScrollReveal from './scroll-reveal';
import { Section } from './section';

export default function AboutSection() {
  return (
    <Section id="about" className="bg-background">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal
                containerClassName="text-center"
                textClassName="text-2xl md:text-4xl leading-relaxed"
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                I design and develop user-focused digital experiences. From intuitive UI/UX design to modern WordPress development, I create clean, scalable, and high-performing websites.
            </ScrollReveal>
        </div>
    </Section>
  );
}
