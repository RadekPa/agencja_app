import * as z from 'zod';
// prettier-ignore
export const dictRoyPriceTypeModelSchema = z.object({
    RoyPriceTypeID: z.number().int(),
    RoyPriceTypeDesc: z.string(),
    RoyPriceTypePL: z.string().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictRoyPriceTypePureType = z.infer<typeof dictRoyPriceTypeModelSchema>;
