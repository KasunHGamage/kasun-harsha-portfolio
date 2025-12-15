"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

type ScrollStackProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const childCount = React.Children.count(children);

  return (
    <div ref={containerRef} className={cn('relative', className)} style={{ height: `${childCount * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          const start = index / childCount;
          const end = (index + 1) / childCount;

          const y = useTransform(
            scrollYProgress,
            [start, end],
            ['100vh', `${index * 16}px`]
          );

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [1, 1 - (childCount - index - 1) * 0.05]
          );

          return React.cloneElement(child as React.ReactElement, {
            ...child.props,
            style: {
              ...child.props.style,
              position: 'absolute',
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
  style?: React.CSSProperties;
};

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, style }) => {
  return (
    <motion.div
      style={style}
      className="w-full max-w-2xl px-4"
    >
      {children}
    </motion.div>
  );
};
