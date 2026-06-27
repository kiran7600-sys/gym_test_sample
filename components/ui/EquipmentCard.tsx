'use client';

import { motion, Variants } from 'framer-motion';
import type { Equipment } from '@/types';

interface EquipmentCardProps {
  equipment: Equipment;
  index: number;
  reversed: boolean;
}

export default function EquipmentCard({ equipment, index, reversed }: EquipmentCardProps) {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: reversed ? 50 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
        reversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Content Side */}
      <div className="flex-1 relative w-full">
        <span
          className="absolute -top-8 -left-4 text-[120px] font-heading text-white/5 leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          {formattedIndex}
        </span>
        <div className="relative z-10">
          <h3 className="font-heading text-3xl lg:text-4xl uppercase tracking-wider text-white mb-4">
            {equipment.name}
          </h3>
          <p className="text-[#888888] leading-relaxed mb-6 max-w-md">
            {equipment.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {equipment.muscles.split(',').map((muscle, i) => (
              <span
                key={i}
                className="bg-red-500/15 text-red-400 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider"
              >
                {muscle.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 w-full">
        <div
          className="w-full h-[300px] rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #121212 50%, #0a0a0a 100%)',
          }}
          role="img"
          aria-label={`${equipment.name} equipment`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading text-6xl text-white/5 uppercase select-none">
              {equipment.name}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
