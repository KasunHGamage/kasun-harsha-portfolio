"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { roles } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { Section } from './section';

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section id="home" className="flex items-center justify-center text-center !min-h-screen">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
           animate={{
              y: ["-20%", "20%"],
              x: ["-20%", "20%"]
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
        />
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              y: ["20%", "-20%"],
              x: ["20%", "-20%"]
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: 5
              }}
        />
      </div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-extrabold tracking-tighter text-foreground sm:text-7xl md:text-8xl">
          Kasun Harsha
        </h1>
        
        <div className="relative mt-2 flex h-10 items-center justify-center overflow-hidden sm:h-12 md:h-16">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[currentRoleIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.5 }}
                className="absolute bg-gradient-to-r from-primary to-accent bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl"
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </AnimatePresence>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
          I design and build high-quality digital products with a focus on seamless user experience and modern engineering.
        </p>
        <motion.div 
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="#work" passHref>
              <Button size="lg" className="w-full shadow-lg shadow-primary/20 sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="#contact" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Get In Touch</Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
