"use client";

import { motion } from 'framer-motion';
import { projects } from '@/lib/data';
import ProjectCard from './project-card';
import { AnimatedUnderline } from './animated-underline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export default function WorkSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured Projects</h2>
        <div className="mt-4 inline-block"><AnimatedUnderline /></div>
      </motion.div>
      
      <div className="relative mt-16">
        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none -ml-4" />
        <div className="flex justify-center">
            <motion.div 
              className="flex overflow-x-auto pb-8 space-x-8 no-scrollbar -mx-4 px-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {projects.map((project, index) => (
                <div key={index} className="flex-shrink-0 w-[380px]">
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none -mr-4" />
      </div>
    </div>
  );
}
