"use client";

import { motion } from 'framer-motion';
import { Mouse } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
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
