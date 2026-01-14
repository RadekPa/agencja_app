import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tblinvoicedetailswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblInvoiceDetailsWhereInputObjectSchema), z.lazy(() => tblInvoiceDetailsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblInvoiceDetailsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblInvoiceDetailsWhereInputObjectSchema), z.lazy(() => tblInvoiceDetailsWhereInputObjectSchema).array()]).optional(),
  InvNum: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  InvDetKey: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  InvType: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(1)]).optional(),
  AgID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  OrdNr: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  NrItems: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RptTitle: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  RptISBN: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  RptAuthor: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  RoyDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  RoyRight: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(15)]).optional().nullable(),
  RoyCopies: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyPrice: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyRate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyXRate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyThisRoy: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyAdvLeft: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  RoyRoyDue: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const tblInvoiceDetailsWhereInputObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsWhereInput> = tblinvoicedetailswhereinputSchema as unknown as z.ZodType<Prisma.tblInvoiceDetailsWhereInput>;
export const tblInvoiceDetailsWhereInputObjectZodSchema = tblinvoicedetailswhereinputSchema;
