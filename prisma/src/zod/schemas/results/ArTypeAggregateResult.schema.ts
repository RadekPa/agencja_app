import * as z from 'zod';
export const ArTypeAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});