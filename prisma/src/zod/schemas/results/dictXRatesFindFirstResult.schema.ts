import * as z from 'zod';
export const dictXRatesFindFirstResultSchema = z.nullable(z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number()
}));