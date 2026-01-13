import * as z from 'zod';
export const SimpleInvoiceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  invType: z.string(),
  invDate: z.date().optional(),
  billToId: z.number().int(),
  billTo: z.unknown(),
  clientId: z.number().int().optional(),
  client: z.unknown().optional(),
  shipToId: z.number().int().optional(),
  currId: z.string().optional(),
  totalInvNET: z.number().optional(),
  vatPerc: z.number().int().optional(),
  termDD: z.number().int().optional(),
  remarks: z.string().optional(),
  status: z.string().optional(),
  sumInWords: z.string().optional(),
  balance: z.number().optional(),
  cliRef: z.string().optional(),
  descr: z.string().optional(),
  dateDue: z.date().optional(),
  userName: z.string().optional(),
  agentID: z.number().int().optional(),
  taxCode: z.string().optional(),
  taxValue: z.number().optional(),
  taxInfo: z.string().optional(),
  propID: z.number().int().optional()
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