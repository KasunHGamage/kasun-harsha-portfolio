"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Linkedin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Section } from './section';
import ScrollIndicator from './scroll-indicator';
import { socialLinks } from '@/lib/data';
import GradientText from './gradient-text';

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
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

export default function HeroSection() {
  const linkedInUrl = socialLinks.find(link => link.name === 'LinkedIn')?.url || '#';
  return (
    <Section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center text-center overflow-hidden bg-background text-foreground"
    >
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-base font-medium text-muted-foreground/70 md:text-lg mb-6"
          variants={itemVariants}
        >
          UI/UX Designer · Frontend Developer · WordPress Specialist
        </motion.p>
        
        <motion.h1 
          className="my-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl flex flex-col items-center"
          variants={itemVariants}
        >
          <GradientText
            colors={['#666666', '#DDDDDD', '#666666']}
            animationSpeed={6}
            className="text-center"
          >
            User-focused design <br /> and development for the modern web.
          </GradientText>
        </motion.h1>

        
        <motion.div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          variants={itemVariants}
        >
          <Link href="#work">
            <Button variant="primary-apple" size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center text-secondary-foreground font-medium hover:text-primary transition-colors h-11 px-8">
            Connect on LinkedIn
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </Section>
  );
}
