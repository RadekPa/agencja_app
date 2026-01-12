import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema';
import { SimpleInvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as SimpleInvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './SimpleInvoiceUncheckedCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  custAbb: z.string().max(10).optional().nullable(),
  name: z.string().max(250).optional().nullable(),
  email: z.string().max(50).optional().nullable(),
  phone: z.string().max(20).optional().nullable(),
  address: z.string().max(150).optional().nullable(),
  city: z.string().max(50).optional().nullable(),
  postalCode: z.string().max(50).optional().nullable(),
  country: z.number().int().optional().nullable(),
  nip: z.string().max(50).optional().nullable(),
  regon: z.string().max(50).optional().nullable(),
  notes: z.string().max(250).optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  simpleInvoices: z.lazy(() => SimpleInvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const CustomerUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CustomerUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUncheckedCreateInput>;
export const CustomerUncheckedCreateInputObjectZodSchema = makeSchema();
