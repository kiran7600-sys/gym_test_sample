'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from '@/components/ui/Lightbox';
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from '@/lib/constants';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = GALLERY_IMAGES.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
    }
  };

  const handleClose = () => {
    setLightboxIndex(null);
  };

  // Heights for masonry layout
  const heights = ['h-56', 'h-72', 'h-80'];

  return (
    <section id="gallery" className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
            OUR SPACE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide">
            IRONFORGE GALLERY
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Take a virtual tour of our premium workout zones, group training rooms, and luxury amenities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {GALLERY_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-accent-red text-white shadow-lg shadow-accent-red/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Masonry using CSS columns) */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => {
              const cardHeight = heights[idx % heights.length];
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid relative overflow-hidden rounded-2xl border border-white/5 cursor-pointer group"
                  onClick={() => setLightboxIndex(idx)}
                >
                  {/* Image Placeholder with Gradient */}
                  <div
                    className={`w-full ${cardHeight} transition-transform duration-700 group-hover:scale-105`}
                    style={{ background: image.gradient }}
                  >
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <span className="font-heading text-xl md:text-2xl text-white/10 uppercase tracking-widest text-center select-none leading-none">
                        {image.alt}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-accent-red text-xs uppercase tracking-widest font-semibold mb-1">
                      {image.category}
                    </span>
                    <h3 className="text-white text-sm font-medium tracking-wide leading-tight">
                      {image.alt}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex ?? 0}
          isOpen={lightboxIndex !== null}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </section>
  );
}
