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
                blurStrength={20}
            >
                {`I design and build user-focused digital experiences by blending thoughtful UI/UX design with modern web development.

My approach is centered on creating fast, intuitive, and scalable products that solve real user problems. Every decision I make is guided by simplicity, usability, and attention to detail—ensuring each interface feels natural, purposeful, and easy to use.`}
            </ScrollReveal>
        </div>
    </Section>
  );
}
