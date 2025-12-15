"use client";

import ScrollReveal from './scroll-reveal';
import GradientText from './gradient-text';

export default function AboutSection() {
  const textContent = "I design intuitive user experiences and build fast, scalable websites using modern frontend technologies and WordPress. From concept to launch, I focus on clarity, performance, and usability.";

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          containerClassName=""
          textClassName="text-xl md:text-2xl leading-relaxed"
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          {textContent}
        </ScrollReveal>
      </div>
    </section>
  );
}
