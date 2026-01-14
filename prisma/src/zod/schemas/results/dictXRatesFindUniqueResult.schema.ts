import * as z from 'zod';
export const dictXRatesFindUniqueResultSchema = z.nullable(z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number()
}));