"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { roles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="block">Kasun Harsha</span>
              <div className="relative mt-2 h-12 sm:h-14 md:h-16">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[index]}
                    className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {roles[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>
            <motion.p 
              className="mx-auto mt-6 max-w-md text-lg text-foreground/80 md:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A creative mind focused on user-centered design and modern frontend engineering to build beautiful, functional, and engaging digital products.
            </motion.p>
            <motion.div 
              className="mt-10 flex justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="#work" passHref>
                <Button size="lg">View My Work</Button>
              </Link>
              <Link href="#contact" passHref>
                <Button size="lg" variant="outline">Get In Touch</Button>
              </Link>
            </motion.div>
          </div>
          <motion.div 
            className="relative"
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
              <Card className="overflow-hidden rounded-2xl border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <CardContent className="p-0">
                  {heroImage && (
                    <Image
                      src={heroImage.imageUrl}
                      alt={heroImage.description}
                      data-ai-hint={heroImage.imageHint}
                      width={600}
                      height={600}
                      priority
                      className="aspect-square object-cover"
                    />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
