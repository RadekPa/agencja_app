import * as z from 'zod';
// prettier-ignore
export const tblAgrRightsInputSchema = z.object({
    AgrRightID: z.number().int(),
    AgrID: z.number().int().optional().nullable(),
    RightID: z.number().int().optional().nullable(),
    PriceTypeID: z.number().int().optional().nullable(),
    RoyPriceTypeID: z.number().int().optional().nullable(),
    RoyAccountIntervalID: z.number().int().optional().nullable(),
    DistID: z.number().int().optional().nullable(),
    dictRoyType: z.array(z.unknown()),
    tblAgreements: z.unknown().optional().nullable(),
    dictDistributionType: z.unknown().optional().nullable(),
    dictRightsForm: z.unknown().optional().nullable(),
    dictRoyPriceType: z.unknown().optional().nullable(),
    dictPriceType: z.unknown().optional().nullable(),
    dictRoyAccountInterval: z.unknown().optional().nullable(),
    tblRoyRates: z.array(z.unknown())
}).strict();

export type tblAgrRightsInputType = z.infer<typeof tblAgrRightsInputSchema>;
