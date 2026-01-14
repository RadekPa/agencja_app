import * as z from 'zod';
// prettier-ignore
export const tblRoyaltyModelSchema = z.object({
    RoyID: z.number().int(),
    AgrID: z.number().int(),
    AgrRightID: z.number().int(),
    RoyNr: z.number().int(),
    EnterDate: z.date().nullable(),
    RoyDate: z.date().nullable(),
    Copies: z.number().int().nullable(),
    Price: z.number().nullable(),
    RoyRate: z.number().nullable(),
    XRate: z.number().nullable(),
    ThisRoy: z.number().nullable(),
    AdvLeft: z.number().nullable(),
    RoyDue: z.number().nullable(),
    Pay: z.number().nullable(),
    AdvID: z.number().int().nullable(),
    tblAgreements: z.unknown()
}).strict();

export type tblRoyaltyPureType = z.infer<typeof tblRoyaltyModelSchema>;
