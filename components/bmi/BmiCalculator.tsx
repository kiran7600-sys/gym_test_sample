'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, RotateCcw, Scale, User, Calendar, Ruler, Award } from 'lucide-react';
import { bmiFormSchema, type BMIFormValues } from '@/lib/validations';
import GlassCard from '@/components/ui/GlassCard';
import type { BMIResult } from '@/types';
import Link from 'next/link';

export default function BmiCalculator() {
  const [result, setResult] = useState<BMIResult | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BMIFormValues>({
    resolver: zodResolver(bmiFormSchema),
    defaultValues: {
      gender: 'male',
      age: 25,
      height: 175,
      weight: 70,
      unit: 'metric',
    },
  });

  const selectedUnit = watch('unit');

  const onSubmit = (data: BMIFormValues) => {
    let bmi = 0;
    if (data.unit === 'metric') {
      const heightInMeters = data.height / 100;
      bmi = data.weight / (heightInMeters * heightInMeters);
    } else {
      bmi = (data.weight * 703) / (data.height * data.height);
    }

    bmi = Math.round(bmi * 10) / 10;

    let category: 'Underweight' | 'Normal' | 'Overweight' | 'Obese' = 'Normal';
    let color = 'text-green-400 border-green-500/30 bg-green-500/10';

    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-400 border-blue-500/30 bg-blue-500/10';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal';
      color = 'text-green-400 border-green-500/30 bg-green-500/10';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = 'text-orange-400 border-orange-500/30 bg-orange-500/10';
    } else {
      category = 'Obese';
      color = 'text-red-400 border-red-500/30 bg-red-500/10';
    }

    // Calculate ideal weights and healthy ranges
    // Healthy range is BMI 18.5 to 24.9
    let healthyMin = 18.5;
    let healthyMax = 24.9;
    let idealWeightMin = 0;
    let idealWeightMax = 0;

    if (data.unit === 'metric') {
      const hM = data.height / 100;
      idealWeightMin = Math.round(healthyMin * hM * hM * 10) / 10;
      idealWeightMax = Math.round(healthyMax * hM * hM * 10) / 10;
    } else {
      idealWeightMin = Math.round((healthyMin * data.height * data.height) / 703 * 10) / 10;
      idealWeightMax = Math.round((healthyMax * data.height * data.height) / 703 * 10) / 10;
    }

    setResult({
      bmi,
      category,
      color,
      healthyRange: { min: healthyMin, max: healthyMax },
      idealWeight: { min: idealWeightMin, max: idealWeightMax },
    });
  };

  const handleReset = () => {
    reset();
    setResult(null);
  };

  // Determine suggested membership options based on BMI
  const getSuggestions = (category: string) => {
    switch (category) {
      case 'Underweight':
        return {
          goal: 'Muscle Gain & Strength Training',
          plan: 'Standard or Premium Plan',
          reason: 'To build lean muscle mass safely, you benefit from a structured strength program and nutrition plan provided by our certified coaches.',
        };
      case 'Overweight':
        return {
          goal: 'Weight Loss & Endurance',
          plan: 'Standard Plan',
          reason: 'Our group fitness classes, cardio zone, and customized diet consultation will help you burn fat efficiently while maintaining high energy.',
        };
      case 'Obese':
        return {
          goal: 'Body Transformation & Health Recovery',
          plan: 'Premium Plan',
          reason: 'One-on-one personal training and strict nutritional guidance are highly recommended to ensure you train safely, avoid injury, and see consistent progress.',
        };
      default:
        return {
          goal: 'Fitness Maintenance & Athletic Performance',
          plan: 'Basic or Standard Plan',
          reason: 'Keep up the excellent health! Use our high-end strength section and cardio floor to build endurance and stay in peak physical shape.',
        };
    }
  };

  const suggestion = result ? getSuggestions(result.category) : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Form Card */}
      <div className="lg:col-span-6 w-full">
        <GlassCard className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <Scale className="w-6 h-6 text-accent-red" />
            <h2 className="font-heading text-2xl uppercase tracking-wider text-white">
              BMI Details
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Unit Selector */}
            <div className="grid grid-cols-2 gap-4 bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setValue('unit', 'metric')}
                className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedUnit === 'metric'
                    ? 'bg-accent-red text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Metric (kg/cm)
              </button>
              <button
                type="button"
                onClick={() => setValue('unit', 'imperial')}
                className={`py-2 rounded-lg text-sm font-semibold transition-all ${
                  selectedUnit === 'imperial'
                    ? 'bg-accent-red text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Imperial (lbs/in)
              </button>
            </div>

            {/* Gender Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="male"
                    {...register('gender')}
                    className="sr-only peer"
                  />
                  <div className="py-3 text-center rounded-xl border border-white/10 text-gray-400 font-semibold text-sm hover:border-white/20 peer-checked:border-accent-red peer-checked:bg-accent-red/10 peer-checked:text-white transition-all">
                    Male
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    value="female"
                    {...register('gender')}
                    className="sr-only peer"
                  />
                  <div className="py-3 text-center rounded-xl border border-white/10 text-gray-400 font-semibold text-sm hover:border-white/20 peer-checked:border-accent-red peer-checked:bg-accent-red/10 peer-checked:text-white transition-all">
                    Female
                  </div>
                </label>
              </div>
            </div>

            {/* Age Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Age (years)
                </label>
                <span className="text-sm font-bold text-accent-gold">
                  {watch('age')} yrs
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="w-5 h-5 text-gray-500" />
                <input
                  type="range"
                  min="14"
                  max="100"
                  {...register('age', { valueAsNumber: true })}
                  className="w-full accent-accent-red bg-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              {errors.age && (
                <p className="text-accent-red text-xs mt-1">{errors.age.message}</p>
              )}
            </div>

            {/* Height & Weight inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Height */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Height ({selectedUnit === 'metric' ? 'cm' : 'inches'})
                </label>
                <div className="relative">
                  <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="number"
                    step="any"
                    placeholder={selectedUnit === 'metric' ? 'e.g., 175' : 'e.g., 69'}
                    {...register('height', { valueAsNumber: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:border-accent-red outline-none transition text-sm font-semibold"
                  />
                </div>
                {errors.height && (
                  <p className="text-accent-red text-xs mt-1">{errors.height.message}</p>
                )}
              </div>

              {/* Weight */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block">
                  Weight ({selectedUnit === 'metric' ? 'kg' : 'lbs'})
                </label>
                <div className="relative">
                  <Scale className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="number"
                    step="any"
                    placeholder={selectedUnit === 'metric' ? 'e.g., 70' : 'e.g., 154'}
                    {...register('weight', { valueAsNumber: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:border-accent-red outline-none transition text-sm font-semibold"
                  />
                </div>
                {errors.weight && (
                  <p className="text-accent-red text-xs mt-1">{errors.weight.message}</p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="col-span-1 border border-white/10 hover:bg-white/10 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
              <button
                type="submit"
                className="col-span-2 bg-accent-red hover:bg-red-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-accent-red/20"
              >
                Calculate BMI
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </GlassCard>
      </div>

      {/* Results Panel */}
      <div className="lg:col-span-6 w-full h-full">
        {result ? (
          <GlassCard className="p-6 sm:p-8 border-accent-red/20 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <Award className="w-6 h-6 text-accent-gold" />
                <h2 className="font-heading text-2xl uppercase tracking-wider text-white">
                  Your Report
                </h2>
              </div>

              {/* Score Display */}
              <div className="text-center py-6 bg-white/5 rounded-2xl border border-white/5 mb-6">
                <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold block mb-1">
                  Your BMI Score
                </span>
                <span className="font-heading text-6xl text-white tracking-wider block mb-2">
                  {result.bmi}
                </span>
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${result.color}`}>
                  {result.category}
                </span>
              </div>

              {/* Progress gauge */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">
                  <span>Underweight (&lt;18.5)</span>
                  <span>Normal (18.5-25)</span>
                  <span>Overweight (25-30)</span>
                  <span>Obese (&gt;30)</span>
                </div>
                <div className="h-3.5 bg-white/10 rounded-full overflow-hidden relative border border-white/5">
                  {/* Underweight zone */}
                  <div className="absolute top-0 bottom-0 left-0 w-[35%] bg-blue-500/20 border-r border-white/5" />
                  {/* Normal zone */}
                  <div className="absolute top-0 bottom-0 left-[35%] w-[25%] bg-green-500/20 border-r border-white/5" />
                  {/* Overweight zone */}
                  <div className="absolute top-0 bottom-0 left-[60%] w-[15%] bg-orange-500/20 border-r border-white/5" />
                  {/* Obese zone */}
                  <div className="absolute top-0 bottom-0 left-[75%] w-[25%] bg-red-500/20" />

                  {/* Marker indicator */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_#fff] transition-all duration-1000"
                    style={{
                      left: `${Math.min(Math.max((result.bmi / 40) * 100, 2), 98)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Range Information */}
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2.5 border-b border-white/5 text-sm">
                  <span className="text-gray-400 font-medium">Healthy BMI Range:</span>
                  <span className="text-white font-semibold">18.5 kg/m² - 24.9 kg/m²</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5 text-sm">
                  <span className="text-gray-400 font-medium">Healthy Weight Range:</span>
                  <span className="text-white font-semibold">
                    {result.idealWeight.min} {selectedUnit === 'metric' ? 'kg' : 'lbs'} -{' '}
                    {result.idealWeight.max} {selectedUnit === 'metric' ? 'kg' : 'lbs'}
                  </span>
                </div>
              </div>

              {/* Suggestion Box */}
              {suggestion && (
                <div className="p-5 bg-white/5 rounded-xl border border-white/10 mb-8">
                  <span className="text-accent-gold text-xs font-bold uppercase tracking-widest block mb-2">
                    Personalized Workout Focus
                  </span>
                  <h4 className="text-white font-semibold text-sm mb-1">
                    Goal: {suggestion.goal}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {suggestion.reason}
                  </p>
                </div>
              )}
            </div>

            {/* Suggestions Links */}
            {suggestion && (
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
                <div className="text-left w-full sm:w-auto">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold block">
                    Recommended Plan
                  </span>
                  <span className="text-sm text-white font-bold uppercase tracking-wide">
                    {suggestion.plan}
                  </span>
                </div>
                <Link
                  href="/membership"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-accent-red hover:bg-red-600 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all text-center"
                >
                  Join Membership
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            )}
          </GlassCard>
        ) : (
          <GlassCard className="p-8 border-dashed border-white/10 flex flex-col items-center justify-center text-center h-[450px] lg:h-full">
            <Scale className="w-12 h-12 text-white/20 mb-4 animate-bounce" />
            <h3 className="font-heading text-2xl uppercase tracking-wider text-white mb-2">
              Ready to analyze
            </h3>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Enter your gender, age, height, and weight and click "Calculate BMI" to see your tailored wellness analysis.
            </p>
          </GlassCard>
        )}
      </div>
    </div>
  );
}
