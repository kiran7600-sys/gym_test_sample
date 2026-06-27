'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
            FAQ
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about IRONFORGE memberships, training, and facilities.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="border-t border-white/10">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openIndex === item.id;
            return (
              <div key={item.id} className="border-b border-white/10">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex justify-between items-center py-5 text-left transition-colors duration-200 group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-4 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-accent-red border border-white/10 group-hover:bg-accent-red group-hover:text-white transition-all duration-300">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-6 text-sm sm:text-base text-gray-400 leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
