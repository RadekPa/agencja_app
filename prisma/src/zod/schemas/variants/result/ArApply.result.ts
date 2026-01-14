import * as z from 'zod';
// prettier-ignore
export const ArApplyResultSchema = z.object({
    ApplyID: z.number().int(),
    DebitID: z.number().int(),
    CreditID: z.number().int(),
    TaxPerc: z.number().nullable(),
    TaxAmt: z.number().nullable(),
    AmtApplied: z.number().nullable(),
    GraalPerc: z.number().nullable(),
    GraalAmt: z.number().nullable(),
    Notes: z.string().nullable(),
    ApplyDate: z.date().nullable(),
    TaxSet: z.boolean().nullable(),
    ArTransaction: z.unknown()
}).strict();

export type ArApplyResultType = z.infer<typeof ArApplyResultSchema>;
