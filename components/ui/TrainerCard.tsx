'use client';

import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';
import type { Trainer } from '@/types';

interface TrainerCardProps {
  trainer: Trainer;
}

export default function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -5 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
    >
      {/* Trainer Image */}
      <div className="mx-auto mb-5 w-[200px] h-[200px] rounded-xl overflow-hidden">
        <div
          className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
          }}
          role="img"
          aria-label={`Photo of ${trainer.name}`}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-heading text-3xl text-white/10 uppercase select-none">
              {trainer.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="font-heading text-xl uppercase tracking-wider text-white mb-2">
        {trainer.name}
      </h3>

      {/* Specialization Badge */}
      <span className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm mb-3">
        {trainer.specialization}
      </span>

      {/* Experience */}
      <div className="mb-3">
        <span className="text-xs text-[#C9A84C] font-semibold uppercase tracking-wider">
          {trainer.experience}
        </span>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
        {trainer.bio}
      </p>

      {/* Social Icons */}
      <div className="flex items-center justify-center gap-3">
        {trainer.socials.instagram && (
          <a
            href={trainer.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#888888] hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300"
            aria-label={`${trainer.name}'s Instagram`}
          >
            <Instagram className="w-4 h-4" />
          </a>
        )}
        {trainer.socials.youtube && (
          <a
            href={trainer.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#888888] hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300"
            aria-label={`${trainer.name}'s YouTube`}
          >
            <Youtube className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
