import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  plan: z.string().min(1, 'Please select a membership plan'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message is too long'),
});

export const membershipFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit phone number'),
  age: z.number().min(14, 'Must be at least 14 years old').max(80, 'Age seems invalid'),
  gender: z.string().min(1, 'Please select gender'),
  height: z.string().min(1, 'Please enter height'),
  weight: z.string().min(1, 'Please enter weight'),
  fitnessGoal: z.string().min(1, 'Please select a fitness goal'),
  preferredTime: z.string().min(1, 'Please select preferred time'),
  medicalConditions: z.string().optional().default(''),
  plan: z.string().min(1, 'Please select a plan'),
  addOns: z.array(z.string()).optional().default([]),
  emergencyName: z.string().min(2, 'Emergency contact name required'),
  emergencyPhone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid phone number'),
  emergencyAddress: z.string().min(5, 'Please enter address'),
  notes: z.string().optional().default(''),
});

export const bmiFormSchema = z.object({
  gender: z.enum(['male', 'female']),
  age: z.number().min(14).max(100),
  height: z.number().positive('Height must be positive'),
  weight: z.number().positive('Weight must be positive'),
  unit: z.enum(['metric', 'imperial']),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type MembershipFormValues = z.infer<typeof membershipFormSchema>;
export type BMIFormValues = z.infer<typeof bmiFormSchema>;
