import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictMatTypeCountOrderByAggregateInputObjectSchema as dictMatTypeCountOrderByAggregateInputObjectSchema } from './dictMatTypeCountOrderByAggregateInput.schema';
import { dictMatTypeAvgOrderByAggregateInputObjectSchema as dictMatTypeAvgOrderByAggregateInputObjectSchema } from './dictMatTypeAvgOrderByAggregateInput.schema';
import { dictMatTypeMaxOrderByAggregateInputObjectSchema as dictMatTypeMaxOrderByAggregateInputObjectSchema } from './dictMatTypeMaxOrderByAggregateInput.schema';
import { dictMatTypeMinOrderByAggregateInputObjectSchema as dictMatTypeMinOrderByAggregateInputObjectSchema } from './dictMatTypeMinOrderByAggregateInput.schema';
import { dictMatTypeSumOrderByAggregateInputObjectSchema as dictMatTypeSumOrderByAggregateInputObjectSchema } from './dictMatTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  MatTypeID: SortOrderSchema.optional(),
  MatTypeDesc: SortOrderSchema.optional(),
  MatTypeDescPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictMatTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictMatTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictMatTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictMatTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictMatTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictMatTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictMatTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictMatTypeOrderByWithAggregationInput>;
export const dictMatTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
