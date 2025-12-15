"use client";

import { motion } from 'framer-motion';

export function AnimatedUnderline() {
  return (
    <motion.div
      className="h-1 bg-primary rounded-full"
      initial={{ width: 0 }}
      whileInView={{ width: '4rem' }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.5 }}
    />
  );
}
