import * as z from 'zod';
export const tblCustBankGroupByResultSchema = z.array(z.object({
  CustID: z.number().int(),
  BankName: z.string(),
  BankAddress: z.string(),
  AccountNo: z.string(),
  RoutingNo: z.string(),
  AccountName: z.string(),
  _count: z.object({
    CustID: z.number(),
    BankName: z.number(),
    BankAddress: z.number(),
    AccountNo: z.number(),
    RoutingNo: z.number(),
    AccountName: z.number(),
    tblCustomers: z.number()
  }).optional(),
  _sum: z.object({
    CustID: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    CustID: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    CustID: z.number().int().nullable(),
    BankName: z.string().nullable(),
    BankAddress: z.string().nullable(),
    AccountNo: z.string().nullable(),
    RoutingNo: z.string().nullable(),
    AccountName: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    CustID: z.number().int().nullable(),
    BankName: z.string().nullable(),
    BankAddress: z.string().nullable(),
    AccountNo: z.string().nullable(),
    RoutingNo: z.string().nullable(),
    AccountName: z.string().nullable()
  }).nullable().optional()
}));