"use client";

import React, { useRef, createContext, useContext } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

// Context to share scroll progress
interface ScrollStackContextType {
  scrollYProgress: MotionValue<number>;
  totalItems: number;
}
const ScrollStackContext = createContext<ScrollStackContextType | null>(null);

const useScrollStack = () => {
  const context = useContext(ScrollStackContext);
  if (!context) {
    throw new Error('useScrollStack must be used within a ScrollStack provider');
  }
  return context;
};

// Main container component
export const ScrollStack = ({ children }: { children: React.ReactNode }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const totalItems = React.Children.count(children);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <ScrollStackContext.Provider value={{ scrollYProgress, totalItems }}>
      <div ref={targetRef} className="relative" style={{ height: `${totalItems * 100}vh` }}>
        <div className="sticky top-1/4">
          {children}
        </div>
      </div>
    </ScrollStackContext.Provider>
  );
};

// Scroll stack item component
interface ScrollStackItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export const ScrollStackItem = ({ children, index, className }: ScrollStackItemProps) => {
  const { scrollYProgress, totalItems } = useScrollStack();

  const start = index / totalItems;
  const end = (index + 1) / totalItems;
  
  const scale = useTransform(scrollYProgress, [start, end], [1, 1 - (totalItems - index) * 0.05]);
  const y = useTransform(scrollYProgress, [start, end], [0, -(index * 40)]);

  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      style={{
        zIndex: totalItems - index,
        y,
        scale,
      }}
    >
      <div className={cn("flex flex-col items-center justify-start h-full")}>
        {children}
      </div>
    </motion.div>
  );
};
