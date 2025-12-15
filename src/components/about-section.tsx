"use client";

import GradientText from './gradient-text';
import ScrollReveal from './scroll-reveal';

export default function AboutSection() {
  const textContent = "I design intuitive user experiences and build fast, scalable websites using modern frontend technologies and WordPress. From concept to launch, I focus on clarity, performance, and usability.";

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          textClassName="!text-xl md:!text-2xl !leading-relaxed"
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={3}
          blurStrength={4}
        >
          <GradientText
            colors={["#9CA3AF", "#3B82F6", "#9CA3AF"]}
            animationSpeed={7}
            className="text-xl md:text-2xl leading-relaxed"
          >
            {textContent}
          </GradientText>
        </ScrollReveal>
      </div>
    </section>
  );
}
