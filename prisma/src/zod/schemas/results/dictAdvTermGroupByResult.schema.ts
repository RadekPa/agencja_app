import * as z from 'zod';
export const dictAdvTermGroupByResultSchema = z.array(z.object({
  AdvTermId: z.number().int(),
  AdvTermDesc: z.string(),
  AdvTermPL: z.string(),
  _count: z.object({
    AdvTermId: z.number(),
    AdvTermDesc: z.number(),
    AdvTermPL: z.number()
  }).optional(),
  _sum: z.object({
    AdvTermId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AdvTermId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AdvTermId: z.number().int().nullable(),
    AdvTermDesc: z.string().nullable(),
    AdvTermPL: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AdvTermId: z.number().int().nullable(),
    AdvTermDesc: z.string().nullable(),
    AdvTermPL: z.string().nullable()
  }).nullable().optional()
}));