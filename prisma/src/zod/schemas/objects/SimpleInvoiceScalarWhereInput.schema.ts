import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const simpleinvoicescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema), z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema), z.lazy(() => SimpleInvoiceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  invType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  invDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  billToId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  clientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  shipToId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  currId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  totalInvNET: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  vatPerc: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  termDD: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  sumInWords: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  balance: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  cliRef: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  descr: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  dateDue: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  userName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  agentID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  taxCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  taxValue: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  taxInfo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  propID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const SimpleInvoiceScalarWhereInputObjectSchema: z.ZodType<Prisma.SimpleInvoiceScalarWhereInput> = simpleinvoicescalarwhereinputSchema as unknown as z.ZodType<Prisma.SimpleInvoiceScalarWhereInput>;
export const SimpleInvoiceScalarWhereInputObjectZodSchema = simpleinvoicescalarwhereinputSchema;
