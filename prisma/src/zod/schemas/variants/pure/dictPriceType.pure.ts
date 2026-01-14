import * as z from 'zod';
// prettier-ignore
export const dictPriceTypeModelSchema = z.object({
    PriceTypeID: z.number().int(),
    PriceTypeDesc: z.string().nullable(),
    PriceTypePL: z.string().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictPriceTypePureType = z.infer<typeof dictPriceTypeModelSchema>;
