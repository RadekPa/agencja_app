import * as z from 'zod';
export const dictXRateExcelNamesFindFirstResultSchema = z.nullable(z.object({
  CurrID: z.string(),
  Name: z.string()
}));