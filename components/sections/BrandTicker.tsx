'use client';

import { motion } from 'framer-motion';
import { EQUIPMENT_BRANDS } from '@/lib/constants';

export default function BrandTicker() {
  // Duplicate brands list for seamless loop
  const brandsList = [...EQUIPMENT_BRANDS, ...EQUIPMENT_BRANDS, ...EQUIPMENT_BRANDS, ...EQUIPMENT_BRANDS];

  return (
    <section className="py-12 bg-[#0a0a0a] border-y border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-xs sm:text-sm text-gray-500 tracking-[0.3em] uppercase mb-8 font-semibold">
          TRUSTED BY THE BEST
        </h2>
      </div>

      <div className="relative w-full flex items-center">
        {/* Left Gradient Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Moving Track */}
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {brandsList.map((brand, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span className="font-heading text-xl sm:text-2xl md:text-3xl text-white/20 uppercase tracking-widest hover:text-white/40 cursor-default transition-colors">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red/40" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
