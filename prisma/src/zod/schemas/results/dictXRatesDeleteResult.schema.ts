import * as z from 'zod';
export const dictXRatesDeleteResultSchema = z.nullable(z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number()
}));