import * as z from 'zod';
export const dictXRateExcelNamesGroupByResultSchema = z.array(z.object({
  CurrID: z.string(),
  Name: z.string(),
  _count: z.object({
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
  }).nullable().optional()
}));