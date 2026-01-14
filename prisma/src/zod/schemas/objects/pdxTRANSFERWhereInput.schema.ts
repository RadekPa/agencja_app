import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const pdxtransferwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => pdxTRANSFERWhereInputObjectSchema), z.lazy(() => pdxTRANSFERWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => pdxTRANSFERWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => pdxTRANSFERWhereInputObjectSchema), z.lazy(() => pdxTRANSFERWhereInputObjectSchema).array()]).optional(),
  Bil_nr: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  PayType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  Nasz_inv: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Waluta: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(4)]).optional().nullable(),
  Kwota_wp_ywu: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Kwota_inv: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Tax_10_: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  Tax: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  AUTOR: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  WYD: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  OWNAB: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(5)]).optional().nullable(),
  GRAAL_INCOME: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Transfer: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const pdxTRANSFERWhereInputObjectSchema: z.ZodType<Prisma.pdxTRANSFERWhereInput> = pdxtransferwhereinputSchema as unknown as z.ZodType<Prisma.pdxTRANSFERWhereInput>;
export const pdxTRANSFERWhereInputObjectZodSchema = pdxtransferwhereinputSchema;
