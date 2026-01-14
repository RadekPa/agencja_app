import * as z from 'zod';
// prettier-ignore
export const tblCustBankInputSchema = z.object({
    CustID: z.number().int(),
    BankName: z.string(),
    BankAddress: z.string().optional().nullable(),
    AccountNo: z.string().optional().nullable(),
    RoutingNo: z.string().optional().nullable(),
    AccountName: z.string().optional().nullable(),
    tblCustomers: z.unknown()
}).strict();

export type tblCustBankInputType = z.infer<typeof tblCustBankInputSchema>;
