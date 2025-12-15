"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedUnderline } from './animated-underline';
import { cn } from '@/lib/utils';

export default function SkillsSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Skills & Tools</h2>
        <div className="flex justify-center mt-2"><AnimatedUnderline /></div>
      </motion.div>

      <div ref={targetRef} className="relative mt-12 h-[300vh]">
        <div className="sticky top-1/4">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              skill={skill}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface SkillCardProps {
  skill: (typeof skills)[0];
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const SkillCard = ({ skill, index, scrollYProgress }: SkillCardProps) => {
  const totalCards = skills.length;
  const start = index / totalCards;
  const end = start + (1 / totalCards);
  
  const scale = useTransform(scrollYProgress, [start, end], [1, 1 - (totalCards - index) * 0.05]);
  const y = useTransform(scrollYProgress, [start, end], [0, -(index * 40)]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        zIndex: totalCards - index,
        y,
        scale,
      }}
    >
      <div className={cn("flex flex-col items-center justify-start h-full")}>
        <Card className="w-full max-w-2xl mx-auto bg-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <skill.icon className="h-6 w-6 text-primary" />
              {skill.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center text-foreground/80">
                  <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};