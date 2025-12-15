"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { roles } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { Section } from './section';

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Kasun Harsha
            </h1>
            <div className="relative mt-2 h-10 sm:h-12 md:h-14">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  className="absolute inset-0 flex items-center justify-center lg:justify-start bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-semibold text-2xl sm:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-foreground/80 md:text-xl">
              I design and build high-quality digital products with a focus on seamless user experience and modern engineering.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link href="#work" passHref>
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Get In Touch</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-12 lg:mt-0 h-[300px] lg:h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Soft Gradient Glow */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 bg-accent/10 rounded-full blur-3xl" />
            </div>

            <motion.div
              animate={{
                y: ["-6px", "6px"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="w-full h-full"
            >
              {/* Glassmorphism Panel */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30">
                {/* Inner reflection/gradient */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsla(var(--primary)/0.05), transparent)",
                    backgroundSize: "400% 400%",
                  }}
                />
                {/* Inner highlight */}
                <div className="absolute top-0 left-0 w-full h-full rounded-3xl ring-1 ring-inset ring-white/10" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
