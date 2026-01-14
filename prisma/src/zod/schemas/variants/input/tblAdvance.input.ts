import * as z from 'zod';
// prettier-ignore
export const tblAdvanceInputSchema = z.object({
    AdvID: z.number().int(),
    Inst: z.number().int(),
    AgrID: z.number().int(),
    AdvTermId: z.number().int().optional().nullable(),
    AdvTypeId: z.number().int().optional().nullable(),
    Amount: z.number().optional().nullable(),
    AdvTermDate: z.date().optional().nullable(),
    RoyID: z.number().int().optional().nullable(),
    tblAgreements: z.unknown()
}).strict();

export type tblAdvanceInputType = z.infer<typeof tblAdvanceInputSchema>;
