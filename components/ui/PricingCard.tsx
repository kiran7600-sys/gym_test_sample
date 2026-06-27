'use client';

import { Check } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import type { MembershipPlan, DurationKey } from '@/types';

interface PricingCardProps {
  plan: MembershipPlan;
  duration: DurationKey;
}

const durationLabels: Record<DurationKey, string> = {
  '1M': '/month',
  '3M': '/3 months',
  '6M': '/6 months',
  '12M': '/12 months',
};

export default function PricingCard({ plan, duration }: PricingCardProps) {
  const price = plan.prices[duration];
  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in the ${plan.name} plan (${duration} duration) at ₹${price.toLocaleString('en-IN')}. Please share more details.`
  );
  const whatsappUrl = `https://wa.me/919999999999?text=${whatsappMessage}`;

  return (
    <div className="relative">
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-red-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-red-500/30">
            Most Popular
          </span>
        </div>
      )}
      <GlassCard
        hover
        className={`p-8 flex flex-col h-full ${
          plan.isPopular
            ? 'border-red-500 shadow-[0_0_30px_rgba(255,59,48,0.3)]'
            : ''
        }`}
      >
        <div className="text-center mb-6">
          <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-2">
            {plan.name}
          </h3>
          <p className="text-sm text-[#888888]">{plan.description}</p>
        </div>

        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-lg text-[#888888]">₹</span>
            <span className="text-5xl font-heading text-white tracking-tight">
              {price.toLocaleString('en-IN')}
            </span>
          </div>
          <span className="text-sm text-[#888888]">{durationLabels[duration]}</span>
        </div>

        <ul className="space-y-3 mb-8 flex-1" role="list" aria-label={`${plan.name} features`}>
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0">
                <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
              </span>
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3.5 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
            plan.isPopular
              ? 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/25'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
          }`}
          aria-label={`Get started with ${plan.name} plan`}
        >
          Get Started
        </a>
      </GlassCard>
    </div>
  );
}
