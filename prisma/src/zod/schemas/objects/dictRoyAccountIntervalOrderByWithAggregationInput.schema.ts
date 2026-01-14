import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictRoyAccountIntervalCountOrderByAggregateInputObjectSchema as dictRoyAccountIntervalCountOrderByAggregateInputObjectSchema } from './dictRoyAccountIntervalCountOrderByAggregateInput.schema';
import { dictRoyAccountIntervalAvgOrderByAggregateInputObjectSchema as dictRoyAccountIntervalAvgOrderByAggregateInputObjectSchema } from './dictRoyAccountIntervalAvgOrderByAggregateInput.schema';
import { dictRoyAccountIntervalMaxOrderByAggregateInputObjectSchema as dictRoyAccountIntervalMaxOrderByAggregateInputObjectSchema } from './dictRoyAccountIntervalMaxOrderByAggregateInput.schema';
import { dictRoyAccountIntervalMinOrderByAggregateInputObjectSchema as dictRoyAccountIntervalMinOrderByAggregateInputObjectSchema } from './dictRoyAccountIntervalMinOrderByAggregateInput.schema';
import { dictRoyAccountIntervalSumOrderByAggregateInputObjectSchema as dictRoyAccountIntervalSumOrderByAggregateInputObjectSchema } from './dictRoyAccountIntervalSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  RoyAccountIntervalID: SortOrderSchema.optional(),
  RoyAccountIntervalDesc: SortOrderSchema.optional(),
  IntervalAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictRoyAccountIntervalCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictRoyAccountIntervalAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictRoyAccountIntervalMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictRoyAccountIntervalMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictRoyAccountIntervalSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalOrderByWithAggregationInput>;
export const dictRoyAccountIntervalOrderByWithAggregationInputObjectZodSchema = makeSchema();
