"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
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
  const { scrollYProgress } = useScroll({
      offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center justify-center text-center overflow-hidden bg-background text-foreground"
    >
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div style={{ y }}>
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
        </motion.div>
        
        <motion.p 
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl"
          variants={itemVariants}
        >
          I design intuitive user experiences and build fast, scalable websites using modern frontend technologies and WordPress. From concept to launch, I focus on clarity, performance, and usability.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          variants={itemVariants}
        >
          <Link href="#work">
            <Button size="lg" className="group shadow-lg shadow-primary/20">
              View My Work
              <ArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button size="lg" variant="outline" className="border-border hover:bg-accent">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </motion.div>
      <ScrollIndicator />
    </Section>
  );
}
