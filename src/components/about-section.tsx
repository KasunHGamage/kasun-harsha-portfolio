"use client";

import ScrollReveal from './scroll-reveal';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          containerClassName=""
          textClassName="text-xl md:text-2xl leading-relaxed"
        >
          I design intuitive user experiences and build fast, scalable websites using modern frontend technologies and WordPress. From concept to launch, I focus on clarity, performance, and usability.
        </ScrollReveal>
      </div>
    </section>
  );
}
