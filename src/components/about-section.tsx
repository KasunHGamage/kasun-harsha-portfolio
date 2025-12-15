"use client";

import { motion } from 'framer-motion';
import GradientText from './gradient-text';

export default function AboutSection() {
  const textContent = "I design intuitive user experiences and build fast, scalable websites using modern frontend technologies and WordPress. From concept to launch, I focus on clarity, performance, and usability.";

  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
           <GradientText
            colors={["#9CA3AF", "#3B82F6", "#9CA3AF"]}
            animationSpeed={7}
            className="text-xl md:text-2xl leading-relaxed text-center block"
          >
            {textContent}
          </GradientText>
        </motion.div>
      </div>
    </section>
  );
}
