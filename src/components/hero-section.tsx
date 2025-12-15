"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { roles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const heroImage = PlaceHolderImages.find(p => p.id === 'heroImage');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
              Product-Focused UI/UX & Frontend Designer
            </div>

            <h1 
              className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl"
            >
              Kasun Harsha
            </h1>
            <div className="relative mt-2 h-10 sm:h-12 md:h-14">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  className="absolute inset-0 flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent font-semibold text-2xl sm:text-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>
          <motion.p 
            className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I design and build high-quality digital products with a focus on seamless user experience and modern engineering.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="#work" passHref>
              <Button size="lg" className="w-full sm:w-auto">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#contact" passHref>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Get In Touch</Button>
            </Link>
          </motion.div>

          <motion.div 
            className="relative mt-24 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              animate={{
                y: ["-8px", "8px"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <Card className="overflow-hidden rounded-2xl border-2 border-border/30 bg-card shadow-2xl shadow-primary/10">
                <CardContent className="p-0">
                  {heroImage && (
                    <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      data-ai-hint={heroImage.imageHint}
                      width={1000}
                      height={600}
                      priority
                      className="aspect-video w-full object-cover"
                    />
                  )}
                </CardContent>
              </Card>
               <div className="mt-4 text-center text-sm text-muted-foreground">
                Visual Concept: An abstract representation of creative energy and fluid design.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
