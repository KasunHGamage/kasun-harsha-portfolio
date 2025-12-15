"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type ScrollStackProps = {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className,
  itemDistance = -50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const childCount = React.Children.count(children);

  return (
    <div ref={containerRef} className={cn('relative', className)} style={{ height: `${childCount * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          const start = index / childCount;
          const end = start + 1 / childCount;
          const initialOffset = 30; // Initial vertical separation
          const finalOffset = itemDistance; // From props, controls final stacking distance

          const y = useTransform(
            scrollYProgress,
            [start, end],
            [index * initialOffset, (childCount - 1 - index) * finalOffset]
          );

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1 - index * 0.05, 1 - (childCount - 1 - index) * 0.05]
          );


          return React.cloneElement(child as React.ReactElement, {
            ...child.props,
            style: {
              ...child.props.style,
              y,
              scale,
              zIndex: index,
            },
          });
        })}
      </div>
    </div>
  );
};


type ScrollStackItemProps = {
  children: React.ReactNode;
  index: number;
  style?: React.CSSProperties;
};

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, style }) => {
  return (
    <motion.div
      style={style}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full max-w-2xl px-4">
        {children}
      </div>
    </motion.div>
  );
};
