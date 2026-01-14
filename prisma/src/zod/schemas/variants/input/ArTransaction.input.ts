import * as z from 'zod';
// prettier-ignore
export const ArTransactionInputSchema = z.object({
    TransactionID: z.number().int(),
    DefaultDocRef: z.string().optional().nullable(),
    InvNr: z.number().int().optional().nullable(),
    TransactionDate: z.date().optional().nullable(),
    TransactionType: z.number().int().optional().nullable(),
    Currency: z.string().optional().nullable(),
    TransactionAmt: z.number().optional().nullable(),
    RCustID: z.number().int().optional().nullable(),
    PCustID: z.number().int().optional().nullable(),
    RBalance: z.number().optional().nullable(),
    PBalance: z.number().optional().nullable(),
    IFTBalance: z.number().optional().nullable(),
    GraalBalance: z.number().optional().nullable(),
    ClientReference: z.string().optional().nullable(),
    OurBankTransRef: z.string().optional().nullable(),
    NetDate: z.date().optional().nullable(),
    IsChargeInterest: z.boolean().optional().nullable(),
    Notes: z.string().optional().nullable(),
    ReversalTransID: z.number().int().optional().nullable(),
    OriginTransID: z.number().int().optional().nullable(),
    EntryDate: z.date().optional().nullable(),
    OriginUserID: z.string().optional().nullable(),
    ErrorID: z.number().int().optional().nullable(),
    Status: z.string().optional().nullable(),
    CreditID: z.number().int().optional().nullable(),
    ApplyID: z.number().int().optional().nullable(),
    TaxCode: z.string().optional().nullable(),
    TaxValue: z.number().optional().nullable(),
    ArApply: z.array(z.unknown()),
    ArTransactionDetail: z.array(z.unknown()),
    ArTransferDetail: z.array(z.unknown())
}).strict();

export type ArTransactionInputType = z.infer<typeof ArTransactionInputSchema>;
