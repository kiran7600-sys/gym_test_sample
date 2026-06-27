'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Certified Trainers',
  'Modern Equipment',
  'Personal Coaching',
  'Nutrition Plans',
  'Cardio Zone',
  'Weight Training',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#090909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Decorative Graphic/Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Offset Border */}
            <div className="absolute -inset-4 border-2 border-accent-red/20 rounded-2xl pointer-events-none -z-10 translate-x-4 translate-y-4 hidden sm:block" />
            
            {/* Main Visual Block */}
            <div
              className="h-[400px] sm:h-[500px] rounded-2xl overflow-hidden relative shadow-2xl flex flex-col justify-end p-8 border border-white/5"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
              }}
            >
              {/* Overlay with grid pattern */}
              <div 
                className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] opacity-50 pointer-events-none"
                style={{ backgroundSize: '16px 16px' }}
              />
              
              {/* Shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Decorative text inside graphic */}
              <div className="relative z-10">
                <span className="font-heading text-6xl text-white/5 uppercase tracking-widest block leading-none select-none">
                  FORGE
                </span>
                <span className="font-heading text-8xl text-accent-red/10 uppercase tracking-widest block leading-none select-none -mt-4">
                  LIMITS
                </span>
                <div className="mt-8 flex items-center gap-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-xs">
                  <div className="w-3 h-3 rounded-full bg-accent-red animate-pulse" />
                  <span className="text-sm font-semibold tracking-wider uppercase text-white/90">
                    ISO-9001 Certified Facility
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
              ABOUT OUR GYM
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide leading-tight">
              More Than Just a Gym
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
              At IRONFORGE, we believe in providing a world-class training environment. As a premium, ISO-certified fitness center, we have spent over a decade curating the best equipment, certifying elite trainers, and hosting a community of athletes who strive to raise their bar every single day.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
              Whether you are step one on your fitness journey or a seasoned athlete prepping for competition, our facility is engineered to help you conquer your goals with precision and power.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-red/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-accent-red" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Founder Quote Block */}
            <div className="border-l-2 border-accent-red pl-6 mt-8">
              <p className="italic text-gray-300 text-sm sm:text-base leading-relaxed mb-2">
                "Our mission is simple: to build a cathedral of strength where excuses do not exist, and champions are forged daily."
              </p>
              <p className="font-heading text-accent-gold text-lg tracking-wider uppercase">
                - Vikram R. Malhotra, Founder
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
