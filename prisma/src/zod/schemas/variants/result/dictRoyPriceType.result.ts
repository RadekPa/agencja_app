import * as z from 'zod';
// prettier-ignore
export const dictRoyPriceTypeResultSchema = z.object({
    RoyPriceTypeID: z.number().int(),
    RoyPriceTypeDesc: z.string(),
    RoyPriceTypePL: z.string().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictRoyPriceTypeResultType = z.infer<typeof dictRoyPriceTypeResultSchema>;
