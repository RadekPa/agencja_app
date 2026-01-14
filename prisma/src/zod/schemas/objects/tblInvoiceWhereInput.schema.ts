import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema'

const tblinvoicewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblInvoiceWhereInputObjectSchema), z.lazy(() => tblInvoiceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblInvoiceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblInvoiceWhereInputObjectSchema), z.lazy(() => tblInvoiceWhereInputObjectSchema).array()]).optional(),
  InvNum: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  InvType: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(1)]).optional(),
  InvDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  BillToId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  ClientId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  ShipToId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CurrId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(3)]).optional().nullable(),
  TotalInvNET: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  VATPerc: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  TermDD: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Remarks: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  Status: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  SumInWords: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(500)]).optional().nullable(),
  Balance: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  CliRef: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Descr: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  DateDue: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  UserName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  AgentID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  TaxCode: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  TaxValue: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  TaxInfo: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(1)]).optional().nullable(),
  PropID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tblInvoiceWhereInputObjectSchema: z.ZodType<Prisma.tblInvoiceWhereInput> = tblinvoicewhereinputSchema as unknown as z.ZodType<Prisma.tblInvoiceWhereInput>;
export const tblInvoiceWhereInputObjectZodSchema = tblinvoicewhereinputSchema;
