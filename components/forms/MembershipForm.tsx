'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { membershipFormSchema, MembershipFormValues } from '@/lib/validations';
import { MEMBERSHIP_PLANS, FITNESS_GOALS, WORKOUT_TIMES, WHATSAPP_NUMBER } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, PartyPopper } from 'lucide-react';

const inputStyles =
  'bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition w-full';
const labelStyles = 'text-sm text-gray-400 mb-1.5 block';

const addOnOptions = [
  { value: 'personal-training', label: 'Personal Training Sessions (+₹2,000/mo)' },
  { value: 'diet-consultation', label: 'Diet Consultation (+₹1,500/mo)' },
  { value: 'group-classes', label: 'Group Classes Pass (+₹800/mo)' },
];

export default function MembershipForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(membershipFormSchema),
    defaultValues: {
      addOns: [],
      medicalConditions: '',
      notes: '',
    },
  });

  const selectedPlan = watch('plan');

  const onSubmit = (data: MembershipFormValues) => {
    const selectedPlanData = MEMBERSHIP_PLANS.find((p) => p.id === data.plan);
    const message = encodeURIComponent(
      `Hi! I'd like to register for the ${selectedPlanData?.name || data.plan} plan.\n\nName: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nAge: ${data.age}\nGoal: ${data.fitnessGoal}\nPreferred Time: ${data.preferredTime}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="flex flex-col items-center justify-center text-center py-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
            className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-500" aria-hidden="true" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <PartyPopper className="w-8 h-8 text-yellow-400" aria-hidden="true" />
              <h2 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider">
                Registration Complete!
              </h2>
              <PartyPopper className="w-8 h-8 text-yellow-400" aria-hidden="true" />
            </div>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
              Our team will contact you on WhatsApp shortly.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I just completed my registration on the website.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-0" noValidate>
      {/* Section 1 - Personal Information */}
      <div className="border-b border-white/10 pb-8 mb-8">
        <h3 className="font-heading text-xl text-white uppercase tracking-wider mb-6">
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className={labelStyles}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('fullName')}
              id="fullName"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'membership-fullName-error' : undefined}
              className={inputStyles}
            />
            {errors.fullName && (
              <p id="membership-fullName-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelStyles}>
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              placeholder="john@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'membership-email-error' : undefined}
              className={inputStyles}
            />
            {errors.email && (
              <p id="membership-email-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelStyles}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              {...register('phone')}
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'membership-phone-error' : undefined}
              className={inputStyles}
            />
            {errors.phone && (
              <p id="membership-phone-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className={labelStyles}>
              Age <span className="text-red-500">*</span>
            </label>
            <input
              {...register('age', { valueAsNumber: true })}
              id="age"
              type="number"
              placeholder="25"
              min={14}
              max={80}
              aria-invalid={!!errors.age}
              aria-describedby={errors.age ? 'membership-age-error' : undefined}
              className={inputStyles}
            />
            {errors.age && (
              <p id="membership-age-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className={labelStyles}>
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              {...register('gender')}
              id="gender"
              aria-invalid={!!errors.gender}
              aria-describedby={errors.gender ? 'membership-gender-error' : undefined}
              defaultValue=""
              className={`${inputStyles} appearance-none`}
            >
              <option value="" disabled className="bg-[#1a1a1a] text-gray-500">
                Select Gender
              </option>
              <option value="male" className="bg-[#1a1a1a] text-white">Male</option>
              <option value="female" className="bg-[#1a1a1a] text-white">Female</option>
              <option value="other" className="bg-[#1a1a1a] text-white">Other</option>
            </select>
            {errors.gender && (
              <p id="membership-gender-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.gender.message}
              </p>
            )}
          </div>

          {/* Height */}
          <div>
            <label htmlFor="height" className={labelStyles}>
              Height <span className="text-red-500">*</span>
            </label>
            <input
              {...register('height')}
              id="height"
              type="text"
              placeholder="e.g., 175 cm"
              aria-invalid={!!errors.height}
              aria-describedby={errors.height ? 'membership-height-error' : undefined}
              className={inputStyles}
            />
            {errors.height && (
              <p id="membership-height-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.height.message}
              </p>
            )}
          </div>

          {/* Weight */}
          <div className="md:col-span-1">
            <label htmlFor="weight" className={labelStyles}>
              Weight <span className="text-red-500">*</span>
            </label>
            <input
              {...register('weight')}
              id="weight"
              type="text"
              placeholder="e.g., 70 kg"
              aria-invalid={!!errors.weight}
              aria-describedby={errors.weight ? 'membership-weight-error' : undefined}
              className={inputStyles}
            />
            {errors.weight && (
              <p id="membership-weight-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.weight.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Section 2 - Fitness Profile */}
      <div className="border-b border-white/10 pb-8 mb-8">
        <h3 className="font-heading text-xl text-white uppercase tracking-wider mb-6">
          Fitness Profile
        </h3>
        <div className="space-y-5">
          {/* Fitness Goal */}
          <div>
            <label htmlFor="fitnessGoal" className={labelStyles}>
              Fitness Goal <span className="text-red-500">*</span>
            </label>
            <select
              {...register('fitnessGoal')}
              id="fitnessGoal"
              aria-invalid={!!errors.fitnessGoal}
              aria-describedby={errors.fitnessGoal ? 'membership-fitnessGoal-error' : undefined}
              defaultValue=""
              className={`${inputStyles} appearance-none`}
            >
              <option value="" disabled className="bg-[#1a1a1a] text-gray-500">
                Select Your Goal
              </option>
              {FITNESS_GOALS.map((goal) => (
                <option key={goal} value={goal} className="bg-[#1a1a1a] text-white">
                  {goal}
                </option>
              ))}
            </select>
            {errors.fitnessGoal && (
              <p id="membership-fitnessGoal-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.fitnessGoal.message}
              </p>
            )}
          </div>

          {/* Preferred Workout Time */}
          <div>
            <label htmlFor="preferredTime" className={labelStyles}>
              Preferred Workout Time <span className="text-red-500">*</span>
            </label>
            <select
              {...register('preferredTime')}
              id="preferredTime"
              aria-invalid={!!errors.preferredTime}
              aria-describedby={errors.preferredTime ? 'membership-preferredTime-error' : undefined}
              defaultValue=""
              className={`${inputStyles} appearance-none`}
            >
              <option value="" disabled className="bg-[#1a1a1a] text-gray-500">
                Select Preferred Time
              </option>
              {WORKOUT_TIMES.map((time) => (
                <option key={time} value={time} className="bg-[#1a1a1a] text-white">
                  {time}
                </option>
              ))}
            </select>
            {errors.preferredTime && (
              <p id="membership-preferredTime-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.preferredTime.message}
              </p>
            )}
          </div>

          {/* Medical Conditions */}
          <div>
            <label htmlFor="medicalConditions" className={labelStyles}>
              Medical Conditions (if any)
            </label>
            <textarea
              {...register('medicalConditions')}
              id="medicalConditions"
              rows={3}
              placeholder="List any injuries, allergies, or medical conditions we should know about..."
              className={`${inputStyles} resize-none`}
            />
          </div>
        </div>
      </div>

      {/* Section 3 - Plan Selection */}
      <div className="border-b border-white/10 pb-8 mb-8">
        <h3 className="font-heading text-xl text-white uppercase tracking-wider mb-6">
          Select Your Plan
        </h3>

        {/* Plan Radio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <label key={plan.id} className="cursor-pointer">
              <input
                {...register('plan')}
                type="radio"
                value={plan.id}
                className="sr-only peer"
              />
              <div
                className={`border-2 rounded-xl p-5 transition-all ${
                  selectedPlan === plan.id
                    ? 'border-red-500 bg-red-500/10'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <h4 className="font-heading text-lg text-white uppercase tracking-wider mb-1">
                  {plan.name}
                </h4>
                <p className="text-2xl font-heading text-white mb-3">
                  ₹{plan.prices['1M'].toLocaleString('en-IN')}
                  <span className="text-sm text-gray-500 font-sans">/month</span>
                </p>
                <ul className="space-y-1.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </label>
          ))}
        </div>
        {errors.plan && (
          <p className="text-red-400 text-sm mt-1" role="alert">
            {errors.plan.message}
          </p>
        )}

        {/* Add-Ons */}
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-3">Add-Ons (Optional)</p>
          <div className="space-y-3">
            {addOnOptions.map((addOn) => (
              <label
                key={addOn.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  {...register('addOns')}
                  type="checkbox"
                  value={addOn.value}
                  className="w-5 h-5 rounded border-white/20 bg-white/5 text-red-500 focus:ring-red-500 focus:ring-offset-0 cursor-pointer accent-red-500"
                />
                <span className="text-sm text-gray-300 group-hover:text-white transition">
                  {addOn.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4 - Emergency Contact */}
      <div className="border-b border-white/10 pb-8 mb-8">
        <h3 className="font-heading text-xl text-white uppercase tracking-wider mb-6">
          Emergency Contact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Contact Name */}
          <div>
            <label htmlFor="emergencyName" className={labelStyles}>
              Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register('emergencyName')}
              id="emergencyName"
              type="text"
              placeholder="Emergency contact name"
              autoComplete="off"
              aria-invalid={!!errors.emergencyName}
              aria-describedby={errors.emergencyName ? 'membership-emergencyName-error' : undefined}
              className={inputStyles}
            />
            {errors.emergencyName && (
              <p id="membership-emergencyName-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.emergencyName.message}
              </p>
            )}
          </div>

          {/* Emergency Phone */}
          <div>
            <label htmlFor="emergencyPhone" className={labelStyles}>
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              {...register('emergencyPhone')}
              id="emergencyPhone"
              type="tel"
              placeholder="10-digit mobile number"
              autoComplete="off"
              aria-invalid={!!errors.emergencyPhone}
              aria-describedby={errors.emergencyPhone ? 'membership-emergencyPhone-error' : undefined}
              className={inputStyles}
            />
            {errors.emergencyPhone && (
              <p id="membership-emergencyPhone-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.emergencyPhone.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="emergencyAddress" className={labelStyles}>
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('emergencyAddress')}
              id="emergencyAddress"
              rows={2}
              placeholder="Full address"
              aria-invalid={!!errors.emergencyAddress}
              aria-describedby={errors.emergencyAddress ? 'membership-emergencyAddress-error' : undefined}
              className={`${inputStyles} resize-none`}
            />
            {errors.emergencyAddress && (
              <p id="membership-emergencyAddress-error" className="text-red-400 text-sm mt-1" role="alert">
                {errors.emergencyAddress.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Section 5 - Additional Notes */}
      <div className="mb-8">
        <h3 className="font-heading text-xl text-white uppercase tracking-wider mb-6">
          Additional Notes
        </h3>
        <textarea
          {...register('notes')}
          rows={4}
          placeholder="Anything else you'd like us to know? (e.g., previous gym experience, specific requirements, etc.)"
          className={`${inputStyles} resize-none`}
          aria-label="Additional notes"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_30px_rgba(255,59,48,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Complete Registration</span>
        <CheckCircle className="w-5 h-5" aria-hidden="true" />
      </button>
    </form>
  );
}
