import * as z from 'zod';
export const ArTypeGroupByResultSchema = z.array(z.object({
  ArType: z.string(),
  ArTypeDescription: z.string(),
  ArTypeDescriptionPL: z.string(),
  _count: z.object({
    ArType: z.number(),
    ArTypeDescription: z.number(),
    ArTypeDescriptionPL: z.number()
  }).optional(),
  _min: z.object({
    ArType: z.string().nullable(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    ArType: z.string().nullable(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
  }).nullable().optional()
}));