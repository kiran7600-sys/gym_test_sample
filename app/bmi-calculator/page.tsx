import type { Metadata } from 'next';
import BmiCalculator from '@/components/bmi/BmiCalculator';

export const metadata: Metadata = {
  title: 'BMI Calculator | IRONFORGE GYM',
  description:
    'Calculate your Body Mass Index (BMI) instantly. Find your healthy weight range and receive personalized recommendations for workout goals and membership plans at IRONFORGE.',
  keywords: ['BMI calculator', 'body mass index', 'ideal weight', 'fitness calculation', 'health assessment'],
};

export default function BmiCalculatorPage() {
  return (
    <div className="min-h-screen bg-[#090909] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent-red text-sm font-semibold uppercase tracking-widest mb-4">
            Fitness Assessment
          </span>
          <h1 className="font-heading text-4xl md:text-5xl text-white uppercase tracking-wider mb-4">
            BMI Calculator
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Body Mass Index (BMI) is a convenient rule-of-thumb tool used to estimate healthy body fat. Use our instant calculator to identify where your numbers sit and receive custom routine directions.
          </p>
        </div>

        {/* Interactive Calculator Section */}
        <BmiCalculator />

      </div>
    </div>
  );
}
