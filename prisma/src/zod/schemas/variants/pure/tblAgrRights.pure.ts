import * as z from 'zod';
// prettier-ignore
export const tblAgrRightsModelSchema = z.object({
    AgrRightID: z.number().int(),
    AgrID: z.number().int().nullable(),
    RightID: z.number().int().nullable(),
    PriceTypeID: z.number().int().nullable(),
    RoyPriceTypeID: z.number().int().nullable(),
    RoyAccountIntervalID: z.number().int().nullable(),
    DistID: z.number().int().nullable(),
    dictRoyType: z.array(z.unknown()),
    tblAgreements: z.unknown().nullable(),
    dictDistributionType: z.unknown().nullable(),
    dictRightsForm: z.unknown().nullable(),
    dictRoyPriceType: z.unknown().nullable(),
    dictPriceType: z.unknown().nullable(),
    dictRoyAccountInterval: z.unknown().nullable(),
    tblRoyRates: z.array(z.unknown())
}).strict();

export type tblAgrRightsPureType = z.infer<typeof tblAgrRightsModelSchema>;
