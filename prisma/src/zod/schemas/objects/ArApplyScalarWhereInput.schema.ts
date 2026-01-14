import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema'

const arapplyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArApplyScalarWhereInputObjectSchema), z.lazy(() => ArApplyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArApplyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArApplyScalarWhereInputObjectSchema), z.lazy(() => ArApplyScalarWhereInputObjectSchema).array()]).optional(),
  ApplyID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  DebitID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  CreditID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  TaxPerc: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  TaxAmt: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  AmtApplied: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  GraalPerc: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  GraalAmt: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  Notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ApplyDate: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  TaxSet: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable()
}).strict();
export const ArApplyScalarWhereInputObjectSchema: z.ZodType<Prisma.ArApplyScalarWhereInput> = arapplyscalarwhereinputSchema as unknown as z.ZodType<Prisma.ArApplyScalarWhereInput>;
export const ArApplyScalarWhereInputObjectZodSchema = arapplyscalarwhereinputSchema;
