import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { ArTransactionNullableScalarRelationFilterObjectSchema as ArTransactionNullableScalarRelationFilterObjectSchema } from './ArTransactionNullableScalarRelationFilter.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const artransactiondetailwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransactionDetailWhereInputObjectSchema), z.lazy(() => ArTransactionDetailWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransactionDetailWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransactionDetailWhereInputObjectSchema), z.lazy(() => ArTransactionDetailWhereInputObjectSchema).array()]).optional(),
  ItemID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  TransactionID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  AccountID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  ArTransaction: z.union([z.lazy(() => ArTransactionNullableScalarRelationFilterObjectSchema), z.lazy(() => ArTransactionWhereInputObjectSchema)]).optional()
}).strict();
export const ArTransactionDetailWhereInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailWhereInput> = artransactiondetailwhereinputSchema as unknown as z.ZodType<Prisma.ArTransactionDetailWhereInput>;
export const ArTransactionDetailWhereInputObjectZodSchema = artransactiondetailwhereinputSchema;
