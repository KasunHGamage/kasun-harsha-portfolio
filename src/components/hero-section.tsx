"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Section } from './section';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export default function HeroSection() {
  const { scrollYProgress } = useScroll({
      offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <Section
      id="home"
      className="relative flex min-h-screen items-center justify-center text-center overflow-hidden"
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
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div style={{ y }}>
          {/* Name */}
          <motion.h1 
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            Kasun Harsha
          </motion.h1>

          {/* Static Role */}
           <motion.div 
            className="relative mt-4 flex h-12 items-center justify-center overflow-hidden sm:h-16"
            variants={itemVariants}
          >
            <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
              UI/UX Designer
            </p>
          </motion.div>
        </motion.div>
        
        {/* Description */}
        <motion.p 
          className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl"
          variants={itemVariants}
        >
          I design and build high-quality digital products with a focus on
          seamless user experience and modern engineering.
        </motion.p>

        {/* Buttons */}
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
            <Button size="lg" variant="outline">
              Get In Touch
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Section>
  );
}
