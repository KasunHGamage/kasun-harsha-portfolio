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
                I design and build user-focused digital experiences — combining thoughtful UI/UX design with modern development to create fast, intuitive, and scalable products.
            </ScrollReveal>
        </div>
    </Section>
  );
}
