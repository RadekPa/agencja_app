import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dbo_LocalUserCountOrderByAggregateInputObjectSchema as dbo_LocalUserCountOrderByAggregateInputObjectSchema } from './dbo_LocalUserCountOrderByAggregateInput.schema';
import { dbo_LocalUserAvgOrderByAggregateInputObjectSchema as dbo_LocalUserAvgOrderByAggregateInputObjectSchema } from './dbo_LocalUserAvgOrderByAggregateInput.schema';
import { dbo_LocalUserMaxOrderByAggregateInputObjectSchema as dbo_LocalUserMaxOrderByAggregateInputObjectSchema } from './dbo_LocalUserMaxOrderByAggregateInput.schema';
import { dbo_LocalUserMinOrderByAggregateInputObjectSchema as dbo_LocalUserMinOrderByAggregateInputObjectSchema } from './dbo_LocalUserMinOrderByAggregateInput.schema';
import { dbo_LocalUserSumOrderByAggregateInputObjectSchema as dbo_LocalUserSumOrderByAggregateInputObjectSchema } from './dbo_LocalUserSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional(),
  role: SortOrderSchema.optional(),
  permissions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  locale: SortOrderSchema.optional(),
  _count: z.lazy(() => dbo_LocalUserCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dbo_LocalUserAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dbo_LocalUserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dbo_LocalUserMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dbo_LocalUserSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dbo_LocalUserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dbo_LocalUserOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dbo_LocalUserOrderByWithAggregationInput>;
export const dbo_LocalUserOrderByWithAggregationInputObjectZodSchema = makeSchema();
