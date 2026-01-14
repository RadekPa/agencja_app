import * as z from 'zod';
export const dictXRateExcelNamesUpsertResultSchema = z.object({
  CurrID: z.string(),
  Name: z.string()
});