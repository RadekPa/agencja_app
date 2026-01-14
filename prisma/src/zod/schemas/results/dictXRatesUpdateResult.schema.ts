import * as z from 'zod';
export const dictXRatesUpdateResultSchema = z.nullable(z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number()
}));