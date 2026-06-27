'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/validations';
import { useToast } from '@/components/ui/Toast';
import { WHATSAPP_NUMBER, MEMBERSHIP_PLANS } from '@/lib/constants';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const { addToast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    const message = encodeURIComponent(
      `Hi! I'm ${data.fullName}.\n\nPlan: ${data.plan}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage: ${data.message}`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    addToast('Message sent! Redirecting to WhatsApp...', 'success');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Full Name */}
      <div>
        <input
          {...register('fullName')}
          type="text"
          placeholder="Full Name"
          autoComplete="name"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition w-full"
        />
        {errors.fullName && (
          <p id="fullName-error" className="text-red-400 text-sm mt-1" role="alert">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email Address"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition w-full"
        />
        {errors.email && (
          <p id="email-error" className="text-red-400 text-sm mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <input
          {...register('phone')}
          type="tel"
          placeholder="10-digit mobile number"
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition w-full"
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-400 text-sm mt-1" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Plan */}
      <div>
        <select
          {...register('plan')}
          aria-invalid={!!errors.plan}
          aria-describedby={errors.plan ? 'plan-error' : undefined}
          aria-label="Select membership plan"
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition w-full appearance-none"
          defaultValue=""
        >
          <option value="" disabled className="bg-[#1a1a1a] text-gray-500">
            Select a Plan
          </option>
          {MEMBERSHIP_PLANS.map((plan) => (
            <option key={plan.id} value={plan.id} className="bg-[#1a1a1a] text-white">
              {plan.name}
            </option>
          ))}
        </select>
        {errors.plan && (
          <p id="plan-error" className="text-red-400 text-sm mt-1" role="alert">
            {errors.plan.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register('message')}
          placeholder="Your message..."
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition w-full resize-none"
        />
        {errors.message && (
          <p id="message-error" className="text-red-400 text-sm mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(255,59,48,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Send Message</span>
        <Send className="w-4 h-4" aria-hidden="true" />
      </button>
    </form>
  );
}
