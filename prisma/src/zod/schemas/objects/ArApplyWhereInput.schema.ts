import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { ArTransactionScalarRelationFilterObjectSchema as ArTransactionScalarRelationFilterObjectSchema } from './ArTransactionScalarRelationFilter.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const arapplywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArApplyWhereInputObjectSchema), z.lazy(() => ArApplyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArApplyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArApplyWhereInputObjectSchema), z.lazy(() => ArApplyWhereInputObjectSchema).array()]).optional(),
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
  TaxSet: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  ArTransaction: z.union([z.lazy(() => ArTransactionScalarRelationFilterObjectSchema), z.lazy(() => ArTransactionWhereInputObjectSchema)]).optional()
}).strict();
export const ArApplyWhereInputObjectSchema: z.ZodType<Prisma.ArApplyWhereInput> = arapplywhereinputSchema as unknown as z.ZodType<Prisma.ArApplyWhereInput>;
export const ArApplyWhereInputObjectZodSchema = arapplywhereinputSchema;
