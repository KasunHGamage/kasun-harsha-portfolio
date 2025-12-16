"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { socialLinks } from '@/lib/data';

export default function ContactSection() {
  const linkedInUrl = socialLinks.find(link => link.name === 'LinkedIn')?.url || '#';
  const email = 'hello@kasunharsha.com'; // Replace with your actual email

  return (
    <motion.div
      className="container mx-auto max-w-2xl px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in Touch</h2>
        <p className="mt-4 text-lg leading-8 text-foreground/80">
          Have a project in mind or want to collaborate? I’m available for freelance work and opportunities.
        </p>
      </div>
      
      <div className="mt-12 flex flex-col items-center gap-6">
        <Link href={`mailto:${email}`}>
          <Button variant="primary-apple" size="lg" className="group h-[60px] px-10 text-lg">
            Email Me
            <Mail className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center text-muted-foreground font-medium hover:text-primary transition-colors">
            Connect on LinkedIn
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>

      <p className="mt-12 text-center text-sm text-foreground/50">
        I usually respond within 24 hours.
      </p>
    </motion.div>
  );
}
