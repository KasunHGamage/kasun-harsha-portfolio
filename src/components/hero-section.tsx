"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { roles } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Section } from './section';

const AnimatedRole = ({
  role,
  index,
  progress,
  range,
}: {
  role: string;
  index: number;
  progress: any;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [30, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="absolute inset-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl"
    >
      {role}
    </motion.p>
  );
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const numRoles = roles.length;
  const step = 1 / numRoles;

  return (
    <Section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center text-center"
    >
      {/* Background glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Name */}
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
          Kasun Harsha
        </h1>

        {/* Scrolling role */}
        <div className="relative mt-4 flex h-12 items-center justify-center overflow-hidden sm:h-16">
          {roles.map((role, i) => {
            const start = i * step;
            const end = start + step;
            return (
              <AnimatedRole
                key={role}
                role={role}
                index={i}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </div>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          I design and build high-quality digital products with a focus on
          seamless user experience and modern engineering.
        </p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div whileHover={{ y: -2, scale: 1.05 }}>
            <Link href="#work">
              <Button size="lg" className="shadow-lg shadow-primary/20">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -2, scale: 1.05 }}>
            <Link href="#contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
