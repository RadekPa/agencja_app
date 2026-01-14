import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema'

const artransactiondetailscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArTransactionDetailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransactionDetailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArTransactionDetailScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArTransactionDetailScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArTransactionDetailScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  ItemID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  TransactionID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  AccountID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Amount: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable()
}).strict();
export const ArTransactionDetailScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailScalarWhereWithAggregatesInput> = artransactiondetailscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArTransactionDetailScalarWhereWithAggregatesInput>;
export const ArTransactionDetailScalarWhereWithAggregatesInputObjectZodSchema = artransactiondetailscalarwherewithaggregatesinputSchema;
