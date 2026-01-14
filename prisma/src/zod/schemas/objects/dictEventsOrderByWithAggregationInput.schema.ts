import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictEventsCountOrderByAggregateInputObjectSchema as dictEventsCountOrderByAggregateInputObjectSchema } from './dictEventsCountOrderByAggregateInput.schema';
import { dictEventsAvgOrderByAggregateInputObjectSchema as dictEventsAvgOrderByAggregateInputObjectSchema } from './dictEventsAvgOrderByAggregateInput.schema';
import { dictEventsMaxOrderByAggregateInputObjectSchema as dictEventsMaxOrderByAggregateInputObjectSchema } from './dictEventsMaxOrderByAggregateInput.schema';
import { dictEventsMinOrderByAggregateInputObjectSchema as dictEventsMinOrderByAggregateInputObjectSchema } from './dictEventsMinOrderByAggregateInput.schema';
import { dictEventsSumOrderByAggregateInputObjectSchema as dictEventsSumOrderByAggregateInputObjectSchema } from './dictEventsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  EventCode: SortOrderSchema.optional(),
  EventDesc: SortOrderSchema.optional(),
  _count: z.lazy(() => dictEventsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictEventsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictEventsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictEventsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictEventsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictEventsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictEventsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictEventsOrderByWithAggregationInput>;
export const dictEventsOrderByWithAggregationInputObjectZodSchema = makeSchema();
