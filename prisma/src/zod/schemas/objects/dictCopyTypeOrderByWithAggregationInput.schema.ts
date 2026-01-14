import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictCopyTypeCountOrderByAggregateInputObjectSchema as dictCopyTypeCountOrderByAggregateInputObjectSchema } from './dictCopyTypeCountOrderByAggregateInput.schema';
import { dictCopyTypeAvgOrderByAggregateInputObjectSchema as dictCopyTypeAvgOrderByAggregateInputObjectSchema } from './dictCopyTypeAvgOrderByAggregateInput.schema';
import { dictCopyTypeMaxOrderByAggregateInputObjectSchema as dictCopyTypeMaxOrderByAggregateInputObjectSchema } from './dictCopyTypeMaxOrderByAggregateInput.schema';
import { dictCopyTypeMinOrderByAggregateInputObjectSchema as dictCopyTypeMinOrderByAggregateInputObjectSchema } from './dictCopyTypeMinOrderByAggregateInput.schema';
import { dictCopyTypeSumOrderByAggregateInputObjectSchema as dictCopyTypeSumOrderByAggregateInputObjectSchema } from './dictCopyTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CopyTypeID: SortOrderSchema.optional(),
  CopyType: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictCopyTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictCopyTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictCopyTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictCopyTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictCopyTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictCopyTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictCopyTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeOrderByWithAggregationInput>;
export const dictCopyTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
