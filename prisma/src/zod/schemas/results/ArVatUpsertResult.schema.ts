import * as z from 'zod';
export const ArVatUpsertResultSchema = z.object({
  VatCode: z.string(),
  Description: z.string(),
  VatRate: z.number(),
  DescriptionPL: z.string()
});