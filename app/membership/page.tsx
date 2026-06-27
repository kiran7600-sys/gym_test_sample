import type { Metadata } from 'next';
import MembershipForm from '@/components/forms/MembershipForm';

export const metadata: Metadata = {
  title: 'Join IRONFORGE | Membership Registration',
  description:
    'Register for an IRONFORGE GYM membership. Choose from Basic, Standard, or Premium plans with world-class equipment, certified trainers, and personalized fitness programs.',
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-[#090909] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-red-500 text-sm font-semibold uppercase tracking-widest mb-4">
            Become a Member
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
            Start Your Transformation
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fill out the form below to begin your fitness journey. Our team will reach out to you on
            WhatsApp to finalize your membership.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12">
          <MembershipForm />
        </div>
      </div>
    </div>
  );
}
