import * as z from 'zod';
// prettier-ignore
export const tblRoyaltyInputSchema = z.object({
    RoyID: z.number().int(),
    AgrID: z.number().int(),
    AgrRightID: z.number().int(),
    RoyNr: z.number().int(),
    EnterDate: z.date().optional().nullable(),
    RoyDate: z.date().optional().nullable(),
    Copies: z.number().int().optional().nullable(),
    Price: z.number().optional().nullable(),
    RoyRate: z.number().optional().nullable(),
    XRate: z.number().optional().nullable(),
    ThisRoy: z.number().optional().nullable(),
    AdvLeft: z.number().optional().nullable(),
    RoyDue: z.number().optional().nullable(),
    Pay: z.number().optional().nullable(),
    AdvID: z.number().int().optional().nullable(),
    tblAgreements: z.unknown()
}).strict();

export type tblRoyaltyInputType = z.infer<typeof tblRoyaltyInputSchema>;
