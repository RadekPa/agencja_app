import * as z from 'zod';
export const CustomerFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  custAbb: z.string().optional(),
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.number().int().optional(),
  nip: z.string().optional(),
  regon: z.string().optional(),
  notes: z.string().optional(),
  createdAt: z.date().optional(),
  invoices: z.array(z.unknown()),
  simpleInvoicesAsClient: z.array(z.unknown()),
  simpleInvoicesAsBillTo: z.array(z.unknown())
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