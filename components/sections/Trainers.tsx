'use client';

import { motion } from 'framer-motion';
import TrainerCard from '@/components/ui/TrainerCard';
import { TRAINERS } from '@/lib/constants';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
} as const;

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#090909]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
            EXPERT TRAINERS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide">
            Meet Your Coaches
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Qualified & experienced professionals dedicated to your transformation. They have trained top athletes and bodybuilders, bringing elite methodology directly to you.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TRAINERS.map((trainer) => (
            <motion.div key={trainer.id} variants={itemVariants}>
              <TrainerCard trainer={trainer} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
