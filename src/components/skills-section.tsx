"use client";

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedUnderline } from './animated-underline';
import { ScrollStack, ScrollStackItem } from './scroll-stack';

export default function SkillsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Skills & Tools</h2>
        <div className="flex justify-center mt-2"><AnimatedUnderline /></div>
      </motion.div>

      <ScrollStack useWindowScroll={true} itemDistance={150}>
        {skills.map((skill) => (
          <ScrollStackItem key={skill.category}>
            <Card className="bg-card border-border/50">
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
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  );
}
