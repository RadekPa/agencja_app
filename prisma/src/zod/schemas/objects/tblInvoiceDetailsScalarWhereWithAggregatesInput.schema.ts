import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const tblinvoicedetailsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblInvoiceDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblInvoiceDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblInvoiceDetailsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblInvoiceDetailsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblInvoiceDetailsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  InvNum: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  InvDetKey: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  InvType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(1)]).optional(),
  AgID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  OrdNr: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  NrItems: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  RptTitle: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  RptISBN: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  RptAuthor: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(150)]).optional().nullable(),
  RoyDate: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  RoyRight: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(15)]).optional().nullable(),
  RoyCopies: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyPrice: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  RoyRate: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  RoyXRate: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  RoyThisRoy: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  RoyAdvLeft: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  RoyRoyDue: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const tblInvoiceDetailsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblInvoiceDetailsScalarWhereWithAggregatesInput> = tblinvoicedetailsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblInvoiceDetailsScalarWhereWithAggregatesInput>;
export const tblInvoiceDetailsScalarWhereWithAggregatesInputObjectZodSchema = tblinvoicedetailsscalarwherewithaggregatesinputSchema;
