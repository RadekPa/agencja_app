import * as z from 'zod';
export const ArAccountGroupByResultSchema = z.array(z.object({
  AccountID: z.number().int(),
  AccountDescription: z.string(),
  _count: z.object({
    AccountID: z.number(),
    AccountDescription: z.number()
  }).optional(),
  _sum: z.object({
    AccountID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    AccountID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    AccountID: z.number().int().nullable(),
    AccountDescription: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    AccountID: z.number().int().nullable(),
    AccountDescription: z.string().nullable()
  }).nullable().optional()
}));