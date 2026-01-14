import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictAdvTypeCountOrderByAggregateInputObjectSchema as dictAdvTypeCountOrderByAggregateInputObjectSchema } from './dictAdvTypeCountOrderByAggregateInput.schema';
import { dictAdvTypeAvgOrderByAggregateInputObjectSchema as dictAdvTypeAvgOrderByAggregateInputObjectSchema } from './dictAdvTypeAvgOrderByAggregateInput.schema';
import { dictAdvTypeMaxOrderByAggregateInputObjectSchema as dictAdvTypeMaxOrderByAggregateInputObjectSchema } from './dictAdvTypeMaxOrderByAggregateInput.schema';
import { dictAdvTypeMinOrderByAggregateInputObjectSchema as dictAdvTypeMinOrderByAggregateInputObjectSchema } from './dictAdvTypeMinOrderByAggregateInput.schema';
import { dictAdvTypeSumOrderByAggregateInputObjectSchema as dictAdvTypeSumOrderByAggregateInputObjectSchema } from './dictAdvTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AdvTypeId: SortOrderSchema.optional(),
  AdvTypeDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTypeDescPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictAdvTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictAdvTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictAdvTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictAdvTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictAdvTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictAdvTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictAdvTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvTypeOrderByWithAggregationInput>;
export const dictAdvTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
