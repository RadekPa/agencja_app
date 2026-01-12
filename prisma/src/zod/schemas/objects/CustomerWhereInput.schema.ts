import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { InvoiceListRelationFilterObjectSchema as InvoiceListRelationFilterObjectSchema } from './InvoiceListRelationFilter.schema';
import { SimpleInvoiceListRelationFilterObjectSchema as SimpleInvoiceListRelationFilterObjectSchema } from './SimpleInvoiceListRelationFilter.schema'

const customerwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CustomerWhereInputObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CustomerWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CustomerWhereInputObjectSchema), z.lazy(() => CustomerWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  custAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  phone: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  postalCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  country: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  nip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  regon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  invoices: z.lazy(() => InvoiceListRelationFilterObjectSchema).optional(),
  simpleInvoices: z.lazy(() => SimpleInvoiceListRelationFilterObjectSchema).optional()
}).strict();
export const CustomerWhereInputObjectSchema: z.ZodType<Prisma.CustomerWhereInput> = customerwhereinputSchema as unknown as z.ZodType<Prisma.CustomerWhereInput>;
export const CustomerWhereInputObjectZodSchema = customerwhereinputSchema;
