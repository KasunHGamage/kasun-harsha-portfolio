"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Section } from './section';
import ScrollIndicator from './scroll-indicator';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function HeroSection() {
  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center justify-center text-center overflow-hidden bg-background text-foreground"
    >
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl"
          variants={itemVariants}
        >
          User-focused design and development for the modern web.
        </motion.h1>

        <motion.p
          className="mt-4 text-lg font-medium text-foreground/60 md:text-xl"
          variants={itemVariants}
        >
          UI/UX Designer · Frontend Developer · WordPress Specialist
        </motion.p>
        
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          variants={itemVariants}
        >
          <Link href="#work">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="border-border">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </Section>
  );
}
