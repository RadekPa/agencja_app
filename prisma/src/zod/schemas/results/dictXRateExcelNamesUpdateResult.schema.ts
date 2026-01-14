import * as z from 'zod';
export const dictXRateExcelNamesUpdateResultSchema = z.nullable(z.object({
  CurrID: z.string(),
  Name: z.string()
}));