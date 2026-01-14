import * as z from 'zod';
// prettier-ignore
export const ArTransactionResultSchema = z.object({
    TransactionID: z.number().int(),
    DefaultDocRef: z.string().nullable(),
    InvNr: z.number().int().nullable(),
    TransactionDate: z.date().nullable(),
    TransactionType: z.number().int().nullable(),
    Currency: z.string().nullable(),
    TransactionAmt: z.number().nullable(),
    RCustID: z.number().int().nullable(),
    PCustID: z.number().int().nullable(),
    RBalance: z.number().nullable(),
    PBalance: z.number().nullable(),
    IFTBalance: z.number().nullable(),
    GraalBalance: z.number().nullable(),
    ClientReference: z.string().nullable(),
    OurBankTransRef: z.string().nullable(),
    NetDate: z.date().nullable(),
    IsChargeInterest: z.boolean().nullable(),
    Notes: z.string().nullable(),
    ReversalTransID: z.number().int().nullable(),
    OriginTransID: z.number().int().nullable(),
    EntryDate: z.date().nullable(),
    OriginUserID: z.string().nullable(),
    ErrorID: z.number().int().nullable(),
    Status: z.string().nullable(),
    CreditID: z.number().int().nullable(),
    ApplyID: z.number().int().nullable(),
    TaxCode: z.string().nullable(),
    TaxValue: z.number().nullable(),
    ArApply: z.array(z.unknown()),
    ArTransactionDetail: z.array(z.unknown()),
    ArTransferDetail: z.array(z.unknown())
}).strict();

export type ArTransactionResultType = z.infer<typeof ArTransactionResultSchema>;
