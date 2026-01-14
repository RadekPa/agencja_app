import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const ardefaultaccountscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ArDefaultAccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArDefaultAccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ArDefaultAccountScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ArDefaultAccountScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ArDefaultAccountScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TransactionType: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  DefaultDebitAccount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  DefaultCreditAccount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const ArDefaultAccountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountScalarWhereWithAggregatesInput> = ardefaultaccountscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ArDefaultAccountScalarWhereWithAggregatesInput>;
export const ArDefaultAccountScalarWhereWithAggregatesInputObjectZodSchema = ardefaultaccountscalarwherewithaggregatesinputSchema;
