import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictTargetGroupsCountOrderByAggregateInputObjectSchema as dictTargetGroupsCountOrderByAggregateInputObjectSchema } from './dictTargetGroupsCountOrderByAggregateInput.schema';
import { dictTargetGroupsAvgOrderByAggregateInputObjectSchema as dictTargetGroupsAvgOrderByAggregateInputObjectSchema } from './dictTargetGroupsAvgOrderByAggregateInput.schema';
import { dictTargetGroupsMaxOrderByAggregateInputObjectSchema as dictTargetGroupsMaxOrderByAggregateInputObjectSchema } from './dictTargetGroupsMaxOrderByAggregateInput.schema';
import { dictTargetGroupsMinOrderByAggregateInputObjectSchema as dictTargetGroupsMinOrderByAggregateInputObjectSchema } from './dictTargetGroupsMinOrderByAggregateInput.schema';
import { dictTargetGroupsSumOrderByAggregateInputObjectSchema as dictTargetGroupsSumOrderByAggregateInputObjectSchema } from './dictTargetGroupsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TargetGroupID: SortOrderSchema.optional(),
  TargetGroupDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictTargetGroupsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictTargetGroupsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictTargetGroupsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictTargetGroupsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictTargetGroupsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictTargetGroupsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTargetGroupsOrderByWithAggregationInput>;
export const dictTargetGroupsOrderByWithAggregationInputObjectZodSchema = makeSchema();
