import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictDistributionTypeCountOrderByAggregateInputObjectSchema as dictDistributionTypeCountOrderByAggregateInputObjectSchema } from './dictDistributionTypeCountOrderByAggregateInput.schema';
import { dictDistributionTypeAvgOrderByAggregateInputObjectSchema as dictDistributionTypeAvgOrderByAggregateInputObjectSchema } from './dictDistributionTypeAvgOrderByAggregateInput.schema';
import { dictDistributionTypeMaxOrderByAggregateInputObjectSchema as dictDistributionTypeMaxOrderByAggregateInputObjectSchema } from './dictDistributionTypeMaxOrderByAggregateInput.schema';
import { dictDistributionTypeMinOrderByAggregateInputObjectSchema as dictDistributionTypeMinOrderByAggregateInputObjectSchema } from './dictDistributionTypeMinOrderByAggregateInput.schema';
import { dictDistributionTypeSumOrderByAggregateInputObjectSchema as dictDistributionTypeSumOrderByAggregateInputObjectSchema } from './dictDistributionTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  DistID: SortOrderSchema.optional(),
  DistDesc: SortOrderSchema.optional(),
  _count: z.lazy(() => dictDistributionTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictDistributionTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictDistributionTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictDistributionTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictDistributionTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeOrderByWithAggregationInput>;
export const dictDistributionTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
