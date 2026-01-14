import * as z from 'zod';
// prettier-ignore
export const tblCustBankResultSchema = z.object({
    CustID: z.number().int(),
    BankName: z.string(),
    BankAddress: z.string().nullable(),
    AccountNo: z.string().nullable(),
    RoutingNo: z.string().nullable(),
    AccountName: z.string().nullable(),
    tblCustomers: z.unknown()
}).strict();

export type tblCustBankResultType = z.infer<typeof tblCustBankResultSchema>;
