"use client";

import { motion } from 'framer-motion';

const motionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-xl text-foreground/80 md:text-2xl leading-relaxed"
          {...motionProps}
        >
          I design intuitive user experiences and build fast, scalable websites using modern frontend technologies and WordPress. From concept to launch, I focus on clarity, performance, and usability.
        </motion.p>
      </div>
    </section>
  );
}
