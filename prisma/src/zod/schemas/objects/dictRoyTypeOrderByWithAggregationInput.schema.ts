import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictRoyTypeCountOrderByAggregateInputObjectSchema as dictRoyTypeCountOrderByAggregateInputObjectSchema } from './dictRoyTypeCountOrderByAggregateInput.schema';
import { dictRoyTypeAvgOrderByAggregateInputObjectSchema as dictRoyTypeAvgOrderByAggregateInputObjectSchema } from './dictRoyTypeAvgOrderByAggregateInput.schema';
import { dictRoyTypeMaxOrderByAggregateInputObjectSchema as dictRoyTypeMaxOrderByAggregateInputObjectSchema } from './dictRoyTypeMaxOrderByAggregateInput.schema';
import { dictRoyTypeMinOrderByAggregateInputObjectSchema as dictRoyTypeMinOrderByAggregateInputObjectSchema } from './dictRoyTypeMinOrderByAggregateInput.schema';
import { dictRoyTypeSumOrderByAggregateInputObjectSchema as dictRoyTypeSumOrderByAggregateInputObjectSchema } from './dictRoyTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  RoyTypeID: SortOrderSchema.optional(),
  AgrRightID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyTypeDesc: SortOrderSchema.optional(),
  _count: z.lazy(() => dictRoyTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictRoyTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictRoyTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictRoyTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictRoyTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictRoyTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictRoyTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeOrderByWithAggregationInput>;
export const dictRoyTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
