"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show indicator only at the very top of the page
      setIsVisible(window.scrollY < 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={cn(
        "absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ease-out",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-2 text-foreground/60">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut"
          }}
        >
          <Mouse className="h-6 w-6" />
        </motion.div>
        <span className="text-xs font-medium tracking-wider">Scroll</span>
      </div>
    </motion.div>
  );
}
