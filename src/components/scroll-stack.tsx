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
      <div className="sticky top-0 h-screen overflow-hidden">
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          
          const start = index / childCount;
          const end = 1; // All animations complete at the end

          const y = useTransform(
            scrollYProgress,
            [start, end],
            [`${(index * 4) + 40}vh`, '0vh']
          );
          
          const scale = useTransform(
            scrollYProgress,
            [start, 1],
            [1, 1 - (childCount - index - 1) * 0.05]
          );

          // Apply offset to cards that are "behind" the current one
          const yOffset = useTransform(
            scrollYProgress,
            (latest) => {
              const cardProgress = (latest * childCount);
              const distance = cardProgress - index;
              if (distance > 0) {
                // Card is behind the top-most active card
                return Math.min(distance, childCount - 1 - index) * 12; 
              }
              return 0;
            }
          );
          
          const combinedY = useTransform([y, yOffset], ([yVal, yOffsetVal]) => {
              return `calc(${yVal} + ${yOffsetVal}px)`;
          });


          return React.cloneElement(child as React.ReactElement, {
            ...child.props,
            style: {
              ...child.props.style,
              y: combinedY,
              scale: scale,
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
  style?: React.CSSProperties & { scale: any; y: any };
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
