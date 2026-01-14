import * as z from 'zod';
// prettier-ignore
export const tblRoyRatesResultSchema = z.object({
    Step: z.number().int(),
    AgrRightID: z.number().int(),
    AgrID: z.number().int().nullable(),
    CpsMax: z.number().int().nullable(),
    Rate: z.number().nullable(),
    tblAgreements: z.unknown().nullable(),
    tblAgrRights: z.unknown()
}).strict();

export type tblRoyRatesResultType = z.infer<typeof tblRoyRatesResultSchema>;
