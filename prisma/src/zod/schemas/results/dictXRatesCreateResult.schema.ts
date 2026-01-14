import * as z from 'zod';
export const dictXRatesCreateResultSchema = z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number()
});