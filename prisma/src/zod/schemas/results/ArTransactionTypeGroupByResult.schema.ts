import * as z from 'zod';
export const ArTransactionTypeGroupByResultSchema = z.array(z.object({
  ArType: z.number().int(),
  ArTypeDescription: z.string(),
  ArTypeDescriptionPL: z.string(),
  _count: z.object({
    ArType: z.number(),
    ArTypeDescription: z.number(),
    ArTypeDescriptionPL: z.number()
  }).optional(),
  _sum: z.object({
    ArType: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    ArType: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    ArType: z.number().int().nullable(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    ArType: z.number().int().nullable(),
    ArTypeDescription: z.string().nullable(),
    ArTypeDescriptionPL: z.string().nullable()
  }).nullable().optional()
}));