import * as z from 'zod';
// prettier-ignore
export const tblFraVAT_NewInputSchema = z.object({
    FVNr: z.number().int(),
    FVDate: z.date(),
    FVDateIssued: z.date().optional().nullable(),
    FVType: z.number().int().optional().nullable(),
    CustID: z.number().int().optional().nullable(),
    OrigCurrency: z.string().optional().nullable(),
    FVCurrency: z.string().optional().nullable(),
    GraalPerc: z.number().optional().nullable(),
    VATCode: z.string().optional().nullable(),
    VatPerc: z.number().optional().nullable(),
    NetAmt: z.number().optional().nullable(),
    NetAmtCurr: z.number().optional().nullable(),
    VatAmt: z.number().optional().nullable(),
    XRate: z.number().optional().nullable(),
    VatAmtCurr: z.number().optional().nullable(),
    GrossAmt: z.number().optional().nullable(),
    InvNr: z.number().int().optional().nullable(),
    InvAmt: z.number().optional().nullable(),
    Title: z.string().optional().nullable(),
    ISBNNr: z.string().optional().nullable(),
    PayType: z.string().optional().nullable(),
    InvType: z.string().optional().nullable(),
    FVDescription: z.string().optional().nullable(),
    BilNr: z.number().int().optional().nullable(),
    OrigFVNr: z.number().int().optional().nullable(),
    CorrectFVNr: z.number().int().optional().nullable(),
    CreditID: z.number().int().optional().nullable(),
    ApplyID: z.number().int().optional().nullable(),
    PayDate: z.date().optional().nullable(),
    EnterDate: z.date().optional().nullable(),
    EnterEmployee: z.string().optional().nullable(),
    Status: z.string().optional().nullable()
}).strict();

export type tblFraVAT_NewInputType = z.infer<typeof tblFraVAT_NewInputSchema>;
