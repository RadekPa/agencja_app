import * as z from 'zod';
export const dictXRateExcelNamesAggregateResultSchema = z.object({  _count: z.object({
    CurrID: z.number(),
    Name: z.number()
  }).optional(),
  _min: z.object({
    CurrID: z.string().nullable(),
    Name: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CurrID: z.string().nullable(),
    Name: z.string().nullable()
  }).nullable().optional()});