import * as z from 'zod';
export const ArVatUpdateResultSchema = z.nullable(z.object({
  VatCode: z.string(),
  Description: z.string(),
  VatRate: z.number(),
  DescriptionPL: z.string()
}));