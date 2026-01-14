import * as z from 'zod';
export const tblCustBankUpsertResultSchema = z.object({
  CustID: z.number().int(),
  BankName: z.string(),
  BankAddress: z.string().optional(),
  AccountNo: z.string().optional(),
  RoutingNo: z.string().optional(),
  AccountName: z.string().optional(),
  tblCustomers: z.unknown()
});