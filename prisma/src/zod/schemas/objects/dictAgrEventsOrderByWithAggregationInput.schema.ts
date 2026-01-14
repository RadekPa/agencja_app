import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictAgrEventsCountOrderByAggregateInputObjectSchema as dictAgrEventsCountOrderByAggregateInputObjectSchema } from './dictAgrEventsCountOrderByAggregateInput.schema';
import { dictAgrEventsAvgOrderByAggregateInputObjectSchema as dictAgrEventsAvgOrderByAggregateInputObjectSchema } from './dictAgrEventsAvgOrderByAggregateInput.schema';
import { dictAgrEventsMaxOrderByAggregateInputObjectSchema as dictAgrEventsMaxOrderByAggregateInputObjectSchema } from './dictAgrEventsMaxOrderByAggregateInput.schema';
import { dictAgrEventsMinOrderByAggregateInputObjectSchema as dictAgrEventsMinOrderByAggregateInputObjectSchema } from './dictAgrEventsMinOrderByAggregateInput.schema';
import { dictAgrEventsSumOrderByAggregateInputObjectSchema as dictAgrEventsSumOrderByAggregateInputObjectSchema } from './dictAgrEventsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AgrEventCode: SortOrderSchema.optional(),
  AgrEventDesc: SortOrderSchema.optional(),
  Status: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictAgrEventsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictAgrEventsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictAgrEventsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictAgrEventsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictAgrEventsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictAgrEventsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictAgrEventsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrEventsOrderByWithAggregationInput>;
export const dictAgrEventsOrderByWithAggregationInputObjectZodSchema = makeSchema();
