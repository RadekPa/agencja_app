import * as z from 'zod';
// prettier-ignore
export const ArVatInputSchema = z.object({
    VatCode: z.string(),
    Description: z.string(),
    VatRate: z.number(),
    DescriptionPL: z.string()
}).strict();

export type ArVatInputType = z.infer<typeof ArVatInputSchema>;
