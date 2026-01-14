import * as z from 'zod';
// prettier-ignore
export const dictRoyPriceTypeInputSchema = z.object({
    RoyPriceTypeID: z.number().int(),
    RoyPriceTypeDesc: z.string(),
    RoyPriceTypePL: z.string().optional().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictRoyPriceTypeInputType = z.infer<typeof dictRoyPriceTypeInputSchema>;
