import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ArAccountCountOrderByAggregateInputObjectSchema as ArAccountCountOrderByAggregateInputObjectSchema } from './ArAccountCountOrderByAggregateInput.schema';
import { ArAccountAvgOrderByAggregateInputObjectSchema as ArAccountAvgOrderByAggregateInputObjectSchema } from './ArAccountAvgOrderByAggregateInput.schema';
import { ArAccountMaxOrderByAggregateInputObjectSchema as ArAccountMaxOrderByAggregateInputObjectSchema } from './ArAccountMaxOrderByAggregateInput.schema';
import { ArAccountMinOrderByAggregateInputObjectSchema as ArAccountMinOrderByAggregateInputObjectSchema } from './ArAccountMinOrderByAggregateInput.schema';
import { ArAccountSumOrderByAggregateInputObjectSchema as ArAccountSumOrderByAggregateInputObjectSchema } from './ArAccountSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AccountID: SortOrderSchema.optional(),
  AccountDescription: SortOrderSchema.optional(),
  _count: z.lazy(() => ArAccountCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArAccountAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArAccountMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArAccountMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArAccountSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArAccountOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArAccountOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountOrderByWithAggregationInput>;
export const ArAccountOrderByWithAggregationInputObjectZodSchema = makeSchema();
