import * as z from 'zod';
export const tblInvoiceFindManyResultSchema = z.object({
  data: z.array(z.object({
  InvNum: z.number().int(),
  InvType: z.string(),
  InvDate: z.date().optional(),
  BillToId: z.number().int(),
  ClientId: z.number().int().optional(),
  ShipToId: z.number().int().optional(),
  CurrId: z.string().optional(),
  TotalInvNET: z.number().optional(),
  VATPerc: z.number().int().optional(),
  TermDD: z.number().int().optional(),
  Remarks: z.string().optional(),
  Status: z.string().optional(),
  SumInWords: z.string().optional(),
  Balance: z.number().optional(),
  CliRef: z.string().optional(),
  Descr: z.string().optional(),
  DateDue: z.date().optional(),
  UserName: z.string().optional(),
  AgentID: z.number().int().optional(),
  TaxCode: z.string().optional(),
  TaxValue: z.number().optional(),
  TaxInfo: z.string().optional(),
  PropID: z.number().int().optional()
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