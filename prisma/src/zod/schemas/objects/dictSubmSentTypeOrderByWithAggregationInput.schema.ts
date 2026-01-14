import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictSubmSentTypeCountOrderByAggregateInputObjectSchema as dictSubmSentTypeCountOrderByAggregateInputObjectSchema } from './dictSubmSentTypeCountOrderByAggregateInput.schema';
import { dictSubmSentTypeAvgOrderByAggregateInputObjectSchema as dictSubmSentTypeAvgOrderByAggregateInputObjectSchema } from './dictSubmSentTypeAvgOrderByAggregateInput.schema';
import { dictSubmSentTypeMaxOrderByAggregateInputObjectSchema as dictSubmSentTypeMaxOrderByAggregateInputObjectSchema } from './dictSubmSentTypeMaxOrderByAggregateInput.schema';
import { dictSubmSentTypeMinOrderByAggregateInputObjectSchema as dictSubmSentTypeMinOrderByAggregateInputObjectSchema } from './dictSubmSentTypeMinOrderByAggregateInput.schema';
import { dictSubmSentTypeSumOrderByAggregateInputObjectSchema as dictSubmSentTypeSumOrderByAggregateInputObjectSchema } from './dictSubmSentTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  SubmSentTypeID: SortOrderSchema.optional(),
  SubmSentType: SortOrderSchema.optional(),
  _count: z.lazy(() => dictSubmSentTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictSubmSentTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictSubmSentTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictSubmSentTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictSubmSentTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictSubmSentTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictSubmSentTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictSubmSentTypeOrderByWithAggregationInput>;
export const dictSubmSentTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
