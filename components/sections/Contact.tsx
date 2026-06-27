'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import { WHATSAPP_URL } from '@/lib/constants';

export default function Contact() {
  const contactDetails = [
    {
      icon: <Phone className="w-5 h-5 text-accent-red" />,
      label: 'Call Us',
      value: '+1 (555) 019-2834',
      href: 'tel:+15550192834',
    },
    {
      icon: <Mail className="w-5 h-5 text-accent-red" />,
      label: 'Email Us',
      value: 'hello@ironforgegym.fake',
      href: 'mailto:hello@ironforgegym.fake',
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent-red" />,
      label: 'Our Location',
      value: '99 Strength Boulevard, Fit City, FC 90210',
      href: 'https://maps.google.com/?q=Fit+City',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#090909] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent-red text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold mb-3 block">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6 uppercase tracking-wide">
            Contact Us
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Share your details and we will reach out on WhatsApp shortly. Or drop by for a tour of our facilities.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          
          {/* Left Column: Map & Info */}
          <div className="flex flex-col gap-8 h-full">
            <div className="rounded-2xl overflow-hidden border border-white/10 h-[350px] sm:h-[400px] relative w-full bg-white/5">
              <iframe
                title="IRONFORGE Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.87!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNTInMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale invert opacity-80"
              />
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target={detail.label === 'Our Location' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:border-accent-red/30 transition-all duration-300 group flex flex-col items-center text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {detail.icon}
                  </div>
                  <h3 className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">
                    {detail.label}
                  </h3>
                  <p className="text-white text-xs sm:text-sm font-medium break-all">
                    {detail.value}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-center">
            <ContactForm />
          </div>

        </div>

      </div>

      {/* Floating WhatsApp CTA Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <div className="absolute inset-0 rounded-full bg-green-500 animate-pulse-ring pointer-events-none" />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </a>
    </section>
  );
}
