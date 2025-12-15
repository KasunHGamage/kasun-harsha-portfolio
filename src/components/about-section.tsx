"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { AnimatedUnderline } from '@/components/animated-underline';

const techBadges = [
  "React",
  "Next.js",
  "TypeScript",
  "Figma",
  "Tailwind CSS",
  "Firebase"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
        type: 'spring',
        stiffness: 100
    }
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">About Me</h2>
          <AnimatedUnderline />
        </motion.div>

        <motion.p 
          className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80"
          variants={itemVariants}
        >
          I'm a passionate UI/UX Designer and Frontend Developer dedicated to creating intuitive, beautiful, and user-centered digital experiences. With a strong foundation in both design principles and modern frontend technologies, I bridge the gap between creative vision and technical execution. My workflow is heavily centered around Figma for design and prototyping, which I then bring to life with clean, efficient, and responsive code.
        </motion.p>
        
        <motion.div className="mt-12" variants={containerVariants}>
          <motion.h3 
            className="text-lg font-semibold text-foreground"
            variants={itemVariants}
          >
            My Go-To Technologies
          </motion.h3>
          <motion.div 
            className="mt-4 flex flex-wrap gap-2 justify-center"
            variants={containerVariants}
          >
            {techBadges.map((tech) => (
              <motion.div key={tech} variants={itemVariants}>
                <Badge variant="secondary" className="text-sm px-3 py-1">{tech}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
