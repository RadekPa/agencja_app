import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArTransactionTypeCountOrderByAggregateInputObjectSchema as ArTransactionTypeCountOrderByAggregateInputObjectSchema } from './ArTransactionTypeCountOrderByAggregateInput.schema';
import { ArTransactionTypeAvgOrderByAggregateInputObjectSchema as ArTransactionTypeAvgOrderByAggregateInputObjectSchema } from './ArTransactionTypeAvgOrderByAggregateInput.schema';
import { ArTransactionTypeMaxOrderByAggregateInputObjectSchema as ArTransactionTypeMaxOrderByAggregateInputObjectSchema } from './ArTransactionTypeMaxOrderByAggregateInput.schema';
import { ArTransactionTypeMinOrderByAggregateInputObjectSchema as ArTransactionTypeMinOrderByAggregateInputObjectSchema } from './ArTransactionTypeMinOrderByAggregateInput.schema';
import { ArTransactionTypeSumOrderByAggregateInputObjectSchema as ArTransactionTypeSumOrderByAggregateInputObjectSchema } from './ArTransactionTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional(),
  ArTypeDescription: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ArTypeDescriptionPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ArTransactionTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArTransactionTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArTransactionTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArTransactionTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArTransactionTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArTransactionTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeOrderByWithAggregationInput>;
export const ArTransactionTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
