"use client";

import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedUnderline } from './animated-underline';
import { ScrollStack, ScrollStackItem } from './scroll-stack';

export default function SkillsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sticky top-16 z-10 bg-background/80 backdrop-blur-lg -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-4">
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
      </div>


      <div className="relative pt-8">
        <ScrollStack>
          {skills.map((skill, index) => (
            <ScrollStackItem key={skill.category}>
              <Card className="bg-card/80 border-border/30 backdrop-blur-lg shadow-2xl shadow-black/10 rounded-3xl min-h-[300px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-2xl font-bold">
                    <skill.icon className="h-6 w-6 text-primary" />
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center text-base text-foreground font-medium">
                        <span className="mr-3 h-1.5 w-1.5 rounded-full bg-primary/80"></span>
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
    </div>
  );
}
