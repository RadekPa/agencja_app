import * as z from 'zod';
export const dictXRateExcelNamesCreateResultSchema = z.object({
  CurrID: z.string(),
  Name: z.string()
});