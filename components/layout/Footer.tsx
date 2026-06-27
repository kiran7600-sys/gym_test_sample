'use client';

import { Instagram, Facebook, Youtube, MessageCircle, ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NAV_LINKS, OPENING_HOURS, SOCIAL_LINKS, WHATSAPP_URL } from '@/lib/constants';

function SocialIcon({ platform, url }: { platform: string; url: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-5 h-5" />,
    facebook: <Facebook className="w-5 h-5" />,
    youtube: <Youtube className="w-5 h-5" />,
    whatsapp: <MessageCircle className="w-5 h-5" />,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-400 hover:text-red-400 hover:bg-white/10 transition-all duration-200"
      aria-label={`Follow us on ${platform}`}
    >
      {iconMap[platform] || null}
    </a>
  );
}

export default function Footer() {
  const footerLinks = NAV_LINKS.filter((link) => !link.isExternal).map((link) => ({
    label: link.label,
    href: link.href,
  }));

  return (
    <footer className="bg-[#0a0a0a] text-white" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Socials */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-heading text-2xl tracking-widest text-white mb-4">
              IR
              <span className="relative">
                O
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
              </span>
              NFORGE
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Forging champions since 2014. Your premium fitness destination in the heart of the city.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.platform} platform={social.platform} url={social.url} />
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg uppercase tracking-wider mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h3 className="font-heading text-lg uppercase tracking-wider mb-4 text-white">
              Opening Hours
            </h3>
            <div className="space-y-3">
              {OPENING_HOURS.map((schedule) => (
                <div
                  key={schedule.days}
                  className="flex items-start gap-3 text-sm"
                >
                  <Clock className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">{schedule.days}</p>
                    <p className="text-gray-400">{schedule.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="font-heading text-lg uppercase tracking-wider mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400">
                  99 Strength Boulevard, Fit City,
                  <br />
                  FC 90210
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a
                  href="tel:+15550192834"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +1 (555) 019-2834
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a
                  href="mailto:hello@ironforgegym.fake"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  hello@ironforgegym.fake
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 text-white text-sm placeholder:text-gray-500 px-4 py-2.5 rounded-l-full focus:outline-none focus:border-red-500/50 transition-colors duration-200"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-r-full transition-colors duration-200 flex-shrink-0"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; 2024 IRONFORGE. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Made by <a href="https://kiranugale.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">kiranuagle</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
