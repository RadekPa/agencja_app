import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArDefaultAccountCountOrderByAggregateInputObjectSchema as ArDefaultAccountCountOrderByAggregateInputObjectSchema } from './ArDefaultAccountCountOrderByAggregateInput.schema';
import { ArDefaultAccountAvgOrderByAggregateInputObjectSchema as ArDefaultAccountAvgOrderByAggregateInputObjectSchema } from './ArDefaultAccountAvgOrderByAggregateInput.schema';
import { ArDefaultAccountMaxOrderByAggregateInputObjectSchema as ArDefaultAccountMaxOrderByAggregateInputObjectSchema } from './ArDefaultAccountMaxOrderByAggregateInput.schema';
import { ArDefaultAccountMinOrderByAggregateInputObjectSchema as ArDefaultAccountMinOrderByAggregateInputObjectSchema } from './ArDefaultAccountMinOrderByAggregateInput.schema';
import { ArDefaultAccountSumOrderByAggregateInputObjectSchema as ArDefaultAccountSumOrderByAggregateInputObjectSchema } from './ArDefaultAccountSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TransactionType: SortOrderSchema.optional(),
  DefaultDebitAccount: SortOrderSchema.optional(),
  DefaultCreditAccount: SortOrderSchema.optional(),
  _count: z.lazy(() => ArDefaultAccountCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArDefaultAccountAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArDefaultAccountMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArDefaultAccountMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArDefaultAccountSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArDefaultAccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountOrderByWithAggregationInput>;
export const ArDefaultAccountOrderByWithAggregationInputObjectZodSchema = makeSchema();
