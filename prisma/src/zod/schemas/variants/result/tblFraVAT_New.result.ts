import * as z from 'zod';
// prettier-ignore
export const tblFraVAT_NewResultSchema = z.object({
    FVNr: z.number().int(),
    FVDate: z.date(),
    FVDateIssued: z.date().nullable(),
    FVType: z.number().int().nullable(),
    CustID: z.number().int().nullable(),
    OrigCurrency: z.string().nullable(),
    FVCurrency: z.string().nullable(),
    GraalPerc: z.number().nullable(),
    VATCode: z.string().nullable(),
    VatPerc: z.number().nullable(),
    NetAmt: z.number().nullable(),
    NetAmtCurr: z.number().nullable(),
    VatAmt: z.number().nullable(),
    XRate: z.number().nullable(),
    VatAmtCurr: z.number().nullable(),
    GrossAmt: z.number().nullable(),
    InvNr: z.number().int().nullable(),
    InvAmt: z.number().nullable(),
    Title: z.string().nullable(),
    ISBNNr: z.string().nullable(),
    PayType: z.string().nullable(),
    InvType: z.string().nullable(),
    FVDescription: z.string().nullable(),
    BilNr: z.number().int().nullable(),
    OrigFVNr: z.number().int().nullable(),
    CorrectFVNr: z.number().int().nullable(),
    CreditID: z.number().int().nullable(),
    ApplyID: z.number().int().nullable(),
    PayDate: z.date().nullable(),
    EnterDate: z.date().nullable(),
    EnterEmployee: z.string().nullable(),
    Status: z.string().nullable()
}).strict();

export type tblFraVAT_NewResultType = z.infer<typeof tblFraVAT_NewResultSchema>;
