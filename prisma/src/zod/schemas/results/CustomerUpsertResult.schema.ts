import * as z from 'zod';
export const CustomerUpsertResultSchema = z.object({
  id: z.number().int(),
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
  invoices: z.array(z.unknown())
});