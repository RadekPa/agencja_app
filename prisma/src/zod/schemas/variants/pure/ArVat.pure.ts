import * as z from 'zod';
// prettier-ignore
export const ArVatModelSchema = z.object({
    VatCode: z.string(),
    Description: z.string(),
    VatRate: z.number(),
    DescriptionPL: z.string()
}).strict();

export type ArVatPureType = z.infer<typeof ArVatModelSchema>;
