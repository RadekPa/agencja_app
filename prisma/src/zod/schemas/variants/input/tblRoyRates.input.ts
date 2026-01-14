import * as z from 'zod';
// prettier-ignore
export const tblRoyRatesInputSchema = z.object({
    Step: z.number().int(),
    AgrRightID: z.number().int(),
    AgrID: z.number().int().optional().nullable(),
    CpsMax: z.number().int().optional().nullable(),
    Rate: z.number().optional().nullable(),
    tblAgreements: z.unknown().optional().nullable(),
    tblAgrRights: z.unknown()
}).strict();

export type tblRoyRatesInputType = z.infer<typeof tblRoyRatesInputSchema>;
