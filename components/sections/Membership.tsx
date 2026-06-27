'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '@/components/ui/PricingCard';
import { MEMBERSHIP_PLANS, DURATION_OPTIONS } from '@/lib/constants';
import type { DurationKey } from '@/types';

export default function Membership() {
  const [selectedDuration, setSelectedDuration] = useState<DurationKey>('1M');

  return (
    <section id="membership" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
            MEMBERSHIP PLANS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide">
            Choose Your Path
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Select a plan that fits your schedule and physical aspirations. We offer premium options designed to help you succeed at every level.
          </p>
        </div>

        {/* Duration Tabs */}
        <div className="flex justify-center mb-16">
          <div className="p-1 bg-white/5 backdrop-blur-md rounded-full inline-flex border border-white/5 relative">
            {DURATION_OPTIONS.map((option) => {
              const isActive = selectedDuration === option.key;
              return (
                <button
                  key={option.key}
                  onClick={() => setSelectedDuration(option.key)}
                  className={`relative z-10 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {option.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-accent-red rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              duration={selectedDuration}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
