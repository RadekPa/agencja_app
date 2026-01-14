import * as z from 'zod';
export const dictXRatesGroupByResultSchema = z.array(z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number(),
  _count: z.object({
    CurrDate: z.number(),
    CurrID: z.number(),
    XRate: z.number()
  }).optional(),
  _sum: z.object({
    XRate: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    XRate: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CurrDate: z.date().nullable(),
    CurrID: z.string().nullable(),
    XRate: z.number().nullable()
  }).nullable().optional(),
  _max: z.object({
    CurrDate: z.date().nullable(),
    CurrID: z.string().nullable(),
    XRate: z.number().nullable()
  }).nullable().optional()
}));