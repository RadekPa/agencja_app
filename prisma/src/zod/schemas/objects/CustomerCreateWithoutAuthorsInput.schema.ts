import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { InvoiceCreateNestedManyWithoutClientInputObjectSchema as InvoiceCreateNestedManyWithoutClientInputObjectSchema } from './InvoiceCreateNestedManyWithoutClientInput.schema'

const makeSchema = () => z.object({
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
  invoices: z.lazy(() => InvoiceCreateNestedManyWithoutClientInputObjectSchema).optional()
}).strict();
export const CustomerCreateWithoutAuthorsInputObjectSchema: z.ZodType<Prisma.CustomerCreateWithoutAuthorsInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateWithoutAuthorsInput>;
export const CustomerCreateWithoutAuthorsInputObjectZodSchema = makeSchema();
