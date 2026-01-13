import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCreateNestedManyWithoutClientInputObjectSchema as InvoiceCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceCreateNestedManyWithoutClientInput.schema';
import { SimpleInvoiceCreateNestedManyWithoutBillToInputObjectSchema as SimpleInvoiceCreateNestedManyWithoutBillToInputObjectSchema } from './SimpleInvoiceCreateNestedManyWithoutBillToInput.schema'

const makeSchema = () => z.object({
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
  invoices: z.lazy(() => InvoiceCreateNestedManyWithoutClientInputObjectSchema).optional(),
  simpleInvoicesAsBillTo: z.lazy(() => SimpleInvoiceCreateNestedManyWithoutBillToInputObjectSchema).optional()
}).strict();
export const CustomerCreateWithoutSimpleInvoicesAsClientInputObjectSchema: z.ZodType<Prisma.CustomerCreateWithoutSimpleInvoicesAsClientInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateWithoutSimpleInvoicesAsClientInput>;
export const CustomerCreateWithoutSimpleInvoicesAsClientInputObjectZodSchema = makeSchema();
