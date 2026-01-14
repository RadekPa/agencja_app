import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictAdvTermCountOrderByAggregateInputObjectSchema as dictAdvTermCountOrderByAggregateInputObjectSchema } from './dictAdvTermCountOrderByAggregateInput.schema';
import { dictAdvTermAvgOrderByAggregateInputObjectSchema as dictAdvTermAvgOrderByAggregateInputObjectSchema } from './dictAdvTermAvgOrderByAggregateInput.schema';
import { dictAdvTermMaxOrderByAggregateInputObjectSchema as dictAdvTermMaxOrderByAggregateInputObjectSchema } from './dictAdvTermMaxOrderByAggregateInput.schema';
import { dictAdvTermMinOrderByAggregateInputObjectSchema as dictAdvTermMinOrderByAggregateInputObjectSchema } from './dictAdvTermMinOrderByAggregateInput.schema';
import { dictAdvTermSumOrderByAggregateInputObjectSchema as dictAdvTermSumOrderByAggregateInputObjectSchema } from './dictAdvTermSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AdvTermId: SortOrderSchema.optional(),
  AdvTermDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTermPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictAdvTermCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictAdvTermAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictAdvTermMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictAdvTermMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictAdvTermSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictAdvTermOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictAdvTermOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTermOrderByWithAggregationInput>;
export const dictAdvTermOrderByWithAggregationInputObjectZodSchema = makeSchema();
