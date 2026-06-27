'use client';

import { motion } from 'framer-motion';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-red-600 to-red-400"
        style={{
          scaleX: progress,
          transformOrigin: 'left',
        }}
        transition={{ duration: 0.1, ease: 'linear' }}
      />
    </div>
  );
}
