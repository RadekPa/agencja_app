import * as z from 'zod';
export const tblCustContactsFindManyResultSchema = z.object({
  data: z.array(z.object({
  ContactID: z.number().int(),
  CustID: z.number().int(),
  DefaultContact: z.number().int(),
  TypeOfContact: z.number().int(),
  Phone: z.string().optional(),
  CellPhone: z.string().optional(),
  Fax: z.string().optional(),
  Email: z.string().optional(),
  IsSameAsClient: z.boolean().optional(),
  tblCustomers: z.unknown(),
  tblContacts: z.unknown()
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