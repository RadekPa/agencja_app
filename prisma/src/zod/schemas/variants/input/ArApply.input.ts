import * as z from 'zod';
// prettier-ignore
export const ArApplyInputSchema = z.object({
    ApplyID: z.number().int(),
    DebitID: z.number().int(),
    CreditID: z.number().int(),
    TaxPerc: z.number().optional().nullable(),
    TaxAmt: z.number().optional().nullable(),
    AmtApplied: z.number().optional().nullable(),
    GraalPerc: z.number().optional().nullable(),
    GraalAmt: z.number().optional().nullable(),
    Notes: z.string().optional().nullable(),
    ApplyDate: z.date().optional().nullable(),
    TaxSet: z.boolean().optional().nullable(),
    ArTransaction: z.unknown()
}).strict();

export type ArApplyInputType = z.infer<typeof ArApplyInputSchema>;
