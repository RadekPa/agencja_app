import * as z from 'zod';
export const tblCustBankFindManyResultSchema = z.object({
  data: z.array(z.object({
  CustID: z.number().int(),
  BankName: z.string(),
  BankAddress: z.string().optional(),
  AccountNo: z.string().optional(),
  RoutingNo: z.string().optional(),
  AccountName: z.string().optional(),
  tblCustomers: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});