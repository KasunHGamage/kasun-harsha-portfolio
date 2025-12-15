"use client";

import React from 'react';
import { motion, useTransform, useScroll, MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

type ScrollStackProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const cards = React.Children.toArray(children);

  return (
    <div ref={containerRef} className={cn('relative', className)} style={{ height: `${cards.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {cards.map((card, index) => {
          if (!React.isValidElement(card)) return null;
          
          return React.cloneElement(card as React.ReactElement, {
            ...card.props,
            index,
            scrollYProgress,
            totalItems: cards.length
          });
        })}
      </div>
    </div>
  );
};


type ScrollStackItemProps = {
  children: React.ReactNode;
  index: number;
  scrollYProgress: MotionValue<number>;
  totalItems: number;
};

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, index, scrollYProgress, totalItems }) => {
  const cardProgress = useTransform(scrollYProgress, [
    (index - 1) / totalItems,
    index / totalItems
  ], [0, 1]);

  const y = useTransform(cardProgress, [0, 1], ['100vh', '0vh']);
  const scale = useTransform(scrollYProgress, (pos) => {
    const cardIsActive = pos >= index / totalItems;
    if (!cardIsActive) return 1;

    const distance = pos - (index / totalItems);
    const maxShrink = 0.1;
    const shrink = Math.min(distance * 0.5, maxShrink);

    return 1 - shrink;
  });
  const translateY = useTransform(scrollYProgress, (pos) => {
    const cardIsActive = pos >= index / totalItems;
    if (!cardIsActive) return 0;
    
    const distance = pos - (index / totalItems);
    const maxOffset = 40; // max px offset
    return -Math.min(distance * 400, maxOffset);
  });

  if (index === 0) {
    return (
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, (pos) => 1 - Math.min(pos * 0.5, 0.1)),
          translateY: useTransform(scrollYProgress, (pos) => -Math.min(pos * 400, 40)),
          zIndex: 0,
          position: 'absolute'
        }}
        className="w-full max-w-4xl px-4"
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      style={{
        y,
        scale,
        translateY,
        zIndex: index,
        position: 'absolute'
      }}
      className="w-full max-w-4xl px-4"
    >
      {children}
    </motion.div>
  );
};
