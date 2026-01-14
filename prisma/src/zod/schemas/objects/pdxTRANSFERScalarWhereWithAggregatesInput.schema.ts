import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema'

const pdxtransferscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => pdxTRANSFERScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => pdxTRANSFERScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => pdxTRANSFERScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => pdxTRANSFERScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => pdxTRANSFERScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  Bil_nr: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  Date: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  PayType: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  Nasz_inv: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Waluta: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(4)]).optional().nullable(),
  Kwota_wp_ywu: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  Kwota_inv: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  Tax_10_: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  Tax: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  AgrID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  AUTOR: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  WYD: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  OWNAB: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(5)]).optional().nullable(),
  GRAAL_INCOME: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  Transfer: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const pdxTRANSFERScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.pdxTRANSFERScalarWhereWithAggregatesInput> = pdxtransferscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.pdxTRANSFERScalarWhereWithAggregatesInput>;
export const pdxTRANSFERScalarWhereWithAggregatesInputObjectZodSchema = pdxtransferscalarwherewithaggregatesinputSchema;
