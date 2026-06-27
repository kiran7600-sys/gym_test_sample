'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
}

export default function AnimatedCounter({ target, suffix, label }: AnimatedCounterProps) {
  const { count, ref } = useAnimatedCounter(target);

  return (
    <div
      ref={ref}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
    >
      <div className="text-4xl font-heading text-white tracking-wide">
        {count.toLocaleString('en-IN')}
        <span className="text-red-500">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-[#888888] uppercase tracking-widest">{label}</p>
    </div>
  );
}
