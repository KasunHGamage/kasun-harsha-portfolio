import React from 'react';
import './gradient-text.css';
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
  } as React.CSSProperties;

  return (
    <span
      className={cn('animated-gradient-text', className)}
      style={gradientStyle}
      {...props}
    >
      {children}
    </span>
  );
};

export default GradientText;
