import * as z from 'zod';
export const dictXRatesUpsertResultSchema = z.object({
  CurrDate: z.date(),
  CurrID: z.string(),
  XRate: z.number()
});