'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, Quote } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <section id="testimonials" className="py-24 bg-[#090909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
            TESTIMONIALS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide">
            What Our Members Say
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real stories from real members. See how IRONFORGE has helped them reach their physical peaks and change their lifestyles.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6 -ml-4">
            {TESTIMONIALS.map((testimonial) => {
              const initials = testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('');

              // Use a nice gradient for each avatar placeholder
              const gradientHash = testimonial.id % 3 === 0
                ? 'from-[#FF3B30] to-[#C9A84C]'
                : testimonial.id % 3 === 1
                ? 'from-[#2a0845] to-[#6441a5]'
                : 'from-[#0f2027] via-[#203a43] to-[#2c5364]';

              return (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
                >
                  <GlassCard hover className="p-8 h-full flex flex-col relative overflow-hidden">
                    {/* Background Subtle Quote Icon */}
                    <Quote className="absolute top-6 right-6 w-16 h-16 text-white/[0.03] rotate-180 pointer-events-none select-none" />

                    {/* Member Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-tr ${gradientHash} flex items-center justify-center text-white font-semibold text-sm border border-white/10`}
                      >
                        {initials}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-sm sm:text-base leading-tight">
                          {testimonial.name}
                        </h3>
                        <span className="text-xs text-gray-500 font-medium">
                          {testimonial.location}
                        </span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? 'text-accent-red fill-accent-red'
                              : 'text-gray-700'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                      "{testimonial.review}"
                    </p>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Google Reviews Badge Link */}
        <div className="text-center mt-12">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent-red hover:text-red-400 font-semibold tracking-wider text-sm transition-colors duration-200"
          >
            See all reviews on Google Reviews
            <span className="text-lg">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
