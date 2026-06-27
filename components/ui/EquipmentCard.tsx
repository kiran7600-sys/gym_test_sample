'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
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

      {/* Image Side with activity-specific animation */}
      <div className="flex-1 w-full relative group/img">
        {/* Red Glow on hover */}
        <div className="absolute -inset-2 bg-red-500/15 blur-2xl rounded-2xl opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />

        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
          {/* Animated image wrapper with subtle left/right motion */}
          <motion.div
            className="absolute inset-0 will-change-transform scale-110"
            animate={{
              x: reversed ? [-15, 15, -15] : [15, -15, 15],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={equipment.image}
              alt={`${equipment.name} workout demonstration`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none z-10" />

          {/* Equipment name watermark */}
          <div className="absolute bottom-4 left-4 z-20">
            <span className="font-heading text-xs tracking-[0.25em] text-white/40 uppercase">
              {equipment.muscles}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
