'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { STATS, WHATSAPP_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#090909]"
    >
      {/* Cinematic Dark Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 25%, #0a0a0a 50%, #0a1a0a 75%, #0a0a0a 100%)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />

      {/* Background Scrolling Ticker */}
      <div className="absolute inset-x-0 top-1/4 -translate-y-1/2 overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          className="flex whitespace-nowrap gap-8"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-heading text-[80px] sm:text-[120px] text-white/[0.02] uppercase tracking-widest leading-none"
            >
              LIFT • TRAIN • GRIND • ASCEND • CONQUER • EVOLVE •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-32 pb-20 flex flex-col justify-center flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7">
            <motion.p
              className="text-accent-red text-sm sm:text-base tracking-[0.3em] uppercase font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              WELCOME TO IRONFORGE
            </motion.p>
            
            <motion.h1
              className="font-heading text-[clamp(3.5rem,6.5vw,7rem)] leading-[0.95] text-white uppercase tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Train Hard.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                Become Strong.
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-xl mt-8 leading-relaxed font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Professional equipment, certified trainers, and personalized fitness programs — your ultimate transformation starts here.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="/membership"
                className="inline-flex justify-center items-center bg-accent-red hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:shadow-[0_0_30px_rgba(255,59,48,0.4)] text-center"
              >
                Join Membership
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-all text-center"
              >
                Book Free Trial
              </a>
            </motion.div>
          </div>

          {/* Right Image Column with Pushup Motion */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Red Glow Background Effect */}
            <div className="absolute -inset-4 bg-accent-red/20 blur-3xl rounded-full opacity-40 -z-10 animate-pulse" />
            
            {/* Diagonal Accent Lines */}
            <div className="absolute w-[120%] h-[10px] bg-accent-red/25 rotate-12 -z-10 blur-sm pointer-events-none" />
            <div className="absolute w-[120%] h-[15px] bg-accent-red/10 -rotate-12 -z-10 blur-md pointer-events-none" />

            <motion.div
              className="relative w-full aspect-[4/3] max-w-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 0.97, 1],
                y: [0, 18, 0]
              }}
              transition={{
                initial: { duration: 0.8 },
                scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Image
                src="/images/pushup.png"
                alt="Muscular trainer doing push-ups on dumbbells"
                fill
                priority
                sizes="(max-w-7xl) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {STATS.map((stat, idx) => (
            <AnimatedCounter
              key={idx}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-accent-red" />
        </motion.div>
      </div>
    </section>
  );
}
