import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema as InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceUncheckedCreateNestedManyWithoutClientInput.schema';
import { SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInputObjectSchema as SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInputObjectSchema } from './SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  custAbb: z.string().optional().nullable(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postalCode: z.string().optional().nullable(),
  country: z.number().int().optional().nullable(),
  nip: z.string().optional().nullable(),
  regon: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional().nullable(),
  invoices: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutClientInputObjectSchema).optional(),
  simpleInvoicesAsBillTo: z.lazy(() => SimpleInvoiceUncheckedCreateNestedManyWithoutBillToInputObjectSchema).optional()
}).strict();
export const CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInput>;
export const CustomerUncheckedCreateWithoutSimpleInvoicesAsClientInputObjectZodSchema = makeSchema();
