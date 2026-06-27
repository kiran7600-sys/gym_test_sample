'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMobileMenuOpen(false);
    },
    []
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-heading text-2xl tracking-widest text-white">
                IR
                <span className="relative">
                  O
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
                </span>
                NFORGE
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10 mx-4">
              {NAV_LINKS.filter(
                (link) =>
                  link.label !== 'Gallery' &&
                  link.label !== 'Testimonials' &&
                  link.label !== 'FAQ'
              ).map((link) =>
                link.isExternal ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-sans text-[11px] xl:text-xs uppercase tracking-[0.18em] font-semibold text-gray-300 hover:text-accent-red transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-[11px] xl:text-xs uppercase tracking-[0.18em] font-semibold text-gray-300 hover:text-accent-red transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
              {/* Book Free Trial - Desktop only */}
              <button
                className="hidden xl:inline-flex border border-white/20 text-white text-sm px-4 py-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                aria-label="Book a free trial session"
              >
                Book Free Trial
              </button>

              {/* WhatsApp Button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-green-400 hover:bg-white/10 transition-colors duration-200"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              {/* Join Now CTA */}
              <Link
                href="/membership"
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
              >
                Join Now
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-black/95 backdrop-blur-lg lg:hidden flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-heading text-2xl tracking-widest text-white">
                  IR
                  <span className="relative">
                    O
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
                  </span>
                  NFORGE
                </span>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-8">
                <div className="flex flex-col gap-4">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                    >
                      {link.isExternal ? (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block font-heading text-3xl tracking-widest text-gray-300 hover:text-accent-red py-4 transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className="block font-heading text-3xl tracking-widest text-gray-300 hover:text-accent-red py-4 transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Drawer Footer CTAs */}
              <div className="px-6 py-6 border-t border-white/10 flex flex-col gap-3">
                <button className="w-full border border-white/20 text-white text-sm font-semibold px-4 py-3 rounded-full hover:bg-white/10 transition-colors duration-200">
                  Book Free Trial
                </button>
                <Link
                  href="/membership"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200"
                >
                  Join Now
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-green-500/30 text-green-400 text-sm font-semibold px-4 py-3 rounded-full hover:bg-green-500/10 transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
