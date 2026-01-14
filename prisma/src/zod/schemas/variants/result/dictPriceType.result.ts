import * as z from 'zod';
// prettier-ignore
export const dictPriceTypeResultSchema = z.object({
    PriceTypeID: z.number().int(),
    PriceTypeDesc: z.string().nullable(),
    PriceTypePL: z.string().nullable(),
    tblAgrRights: z.array(z.unknown())
}).strict();

export type dictPriceTypeResultType = z.infer<typeof dictPriceTypeResultSchema>;
