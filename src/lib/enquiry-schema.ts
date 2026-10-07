import { z } from 'zod';

export const interests = ['Residential Plot', 'Flat / Apartment', 'Residential Project', 'House Planning', 'Construction', 'Estimation', 'Other'] as const;
export const enquirySchema = z.object({
  full_name: z.string().trim().min(2, 'Please enter your full name.').max(100),
  phone: z.string().trim().regex(/^\+?[\d\s()-]{7,20}$/, 'Please enter a valid phone number.').refine(v => v.replace(/\D/g, '').length >= 7, 'Please enter a valid phone number.'),
  interest: z.enum(interests),
  preferred_location: z.string().trim().max(150),
  budget_range: z.string().trim().max(100),
  message: z.string().trim().max(2000),
  project: z.string().trim().max(150),
  website: z.string().max(0, 'Unable to submit this enquiry.'),
});