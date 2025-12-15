"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors = ['#0071E3', '#5E9CFF', '#0071E3'],
  animationSpeed = 6,
  showBorder = false,
  className,
  ...props
}) => {
  const gradientStyle: React.CSSProperties = {
    '--gradient-colors': colors.join(', '),
    '--animation-speed': `${animationSpeed}s`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
    backgroundImage: `linear-gradient(90deg, var(--gradient-colors))`,
    backgroundSize: '200% 200%',
    animation: `gradient-animation var(--animation-speed) ease infinite`,
    ...(showBorder && { borderBottom: '1px solid currentColor' }),
  };

  return (
    <span className={cn('inline-block', className)} style={gradientStyle} {...props}>
      {children}
    </span>
  );
};

export default GradientText;
