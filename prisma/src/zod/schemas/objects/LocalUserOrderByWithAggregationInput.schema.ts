import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { LocalUserCountOrderByAggregateInputObjectSchema as LocalUserCountOrderByAggregateInputObjectSchema } from './LocalUserCountOrderByAggregateInput.schema';
import { LocalUserAvgOrderByAggregateInputObjectSchema as LocalUserAvgOrderByAggregateInputObjectSchema } from './LocalUserAvgOrderByAggregateInput.schema';
import { LocalUserMaxOrderByAggregateInputObjectSchema as LocalUserMaxOrderByAggregateInputObjectSchema } from './LocalUserMaxOrderByAggregateInput.schema';
import { LocalUserMinOrderByAggregateInputObjectSchema as LocalUserMinOrderByAggregateInputObjectSchema } from './LocalUserMinOrderByAggregateInput.schema';
import { LocalUserSumOrderByAggregateInputObjectSchema as LocalUserSumOrderByAggregateInputObjectSchema } from './LocalUserSumOrderByAggregateInput.schema'

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
  _count: z.lazy(() => LocalUserCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => LocalUserAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => LocalUserMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => LocalUserMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => LocalUserSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const LocalUserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.LocalUserOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserOrderByWithAggregationInput>;
export const LocalUserOrderByWithAggregationInputObjectZodSchema = makeSchema();
