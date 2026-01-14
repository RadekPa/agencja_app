import * as z from 'zod';
// prettier-ignore
export const ArVatResultSchema = z.object({
    VatCode: z.string(),
    Description: z.string(),
    VatRate: z.number(),
    DescriptionPL: z.string()
}).strict();

export type ArVatResultType = z.infer<typeof ArVatResultSchema>;
