
"use client";
import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
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
  const cardCount = cards.length;

  return (
    <div ref={containerRef} className={cn('relative', className)} style={{ height: `${cardCount * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {cards.map((card, index) => {
          if (!React.isValidElement(card)) return null;

          const startProgress = index / cardCount;
          const endProgress = (index + 1) / cardCount;

          const y = useTransform(
            scrollYProgress,
            [startProgress, endProgress],
            [index === 0 ? '0vh' : '100vh', `${index * -4}vh`]
          );
          
          const scale = useTransform(
            scrollYProgress,
            [startProgress, endProgress],
            [index === 0 ? 1 : 1.2, 1 - (cardCount - 1 - index) * 0.05]
          );

          return React.cloneElement(card as React.ReactElement, {
            ...card.props,
            style: {
              ...card.props.style,
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
