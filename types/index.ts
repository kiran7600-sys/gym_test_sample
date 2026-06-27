export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Trainer {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  socials: {
    instagram?: string;
    youtube?: string;
  };
}

export interface Equipment {
  id: number;
  name: string;
  description: string;
  muscles: string;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  prices: {
    '1M': number;
    '3M': number;
    '6M': number;
    '12M': number;
  };
  isPopular?: boolean;
}

export type DurationKey = '1M' | '3M' | '6M' | '12M';

export interface DurationOption {
  key: DurationKey;
  label: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  gradient: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  plan: string;
  message: string;
}

export interface MembershipFormData {
  fullName: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  fitnessGoal: string;
  preferredTime: string;
  medicalConditions: string;
  plan: string;
  addOns: string[];
  emergencyName: string;
  emergencyPhone: string;
  emergencyAddress: string;
  notes: string;
}

export interface BMIResult {
  bmi: number;
  category: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
  color: string;
  healthyRange: { min: number; max: number };
  idealWeight: { min: number; max: number };
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
