import * as z from 'zod';
// prettier-ignore
export const dictPriceTypeInputSchema = z.object({
    PriceTypeID: z.number().int(),
    PriceTypeDesc: z.string().optional().nullable(),
    PriceTypePL: z.string().optional().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictPriceTypeInputType = z.infer<typeof dictPriceTypeInputSchema>;
