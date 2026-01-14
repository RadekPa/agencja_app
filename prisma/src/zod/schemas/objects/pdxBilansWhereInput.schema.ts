import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const pdxbilanswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => pdxBilansWhereInputObjectSchema), z.lazy(() => pdxBilansWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => pdxBilansWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => pdxBilansWhereInputObjectSchema), z.lazy(() => pdxBilansWhereInputObjectSchema).array()]).optional(),
  Bil_nr: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  Waluta: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(4)]).optional().nullable(),
  Wyci_g: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Data_wyc: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  Nasz_inv: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  Kwota_wp_ywu: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  PayType: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(10)]).optional().nullable(),
  Graal_perc: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Kwota_wyp_aty: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Kwota_inv: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Tax_10_: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  TaxPerc: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Tax: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Wyd_Debit: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Extra_Bank: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Transfer: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AGNR: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RIGHT: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  AUTOR: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(35)]).optional().nullable(),
  Title: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  WYDAB: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(5)]).optional().nullable(),
  WYD: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  OWNAB: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(5)]).optional().nullable(),
  OWNER: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  Sum: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  SumPLN: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  GRAAL_INCOME: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Kurs: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  GraalPLN: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const pdxBilansWhereInputObjectSchema: z.ZodType<Prisma.pdxBilansWhereInput> = pdxbilanswhereinputSchema as unknown as z.ZodType<Prisma.pdxBilansWhereInput>;
export const pdxBilansWhereInputObjectZodSchema = pdxbilanswhereinputSchema;
