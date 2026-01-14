import * as z from 'zod';
export const dictXRateExcelNamesFindUniqueResultSchema = z.nullable(z.object({
  CurrID: z.string(),
  Name: z.string()
}));