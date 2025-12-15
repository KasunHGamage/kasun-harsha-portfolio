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
import { Section } from './section';

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
            className="relative mt-12 lg:mt-0"
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
