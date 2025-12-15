"use client";

import { motion } from 'framer-motion';

export default function AboutSection() {
  const textContent = "I design intuitive user experiences and build fast, scalable websites using modern frontend technologies and WordPress. From concept to launch, I focus on clarity, performance, and usability.";

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <motion.div 
        className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 text-center">
            {textContent}
        </p>
      </motion.div>
    </section>
  );
}
