import * as z from 'zod';
// prettier-ignore
export const tblAdvanceResultSchema = z.object({
    AdvID: z.number().int(),
    Inst: z.number().int(),
    AgrID: z.number().int(),
    AdvTermId: z.number().int().nullable(),
    AdvTypeId: z.number().int().nullable(),
    Amount: z.number().nullable(),
    AdvTermDate: z.date().nullable(),
    RoyID: z.number().int().nullable(),
    tblAgreements: z.unknown()
}).strict();

export type tblAdvanceResultType = z.infer<typeof tblAdvanceResultSchema>;
