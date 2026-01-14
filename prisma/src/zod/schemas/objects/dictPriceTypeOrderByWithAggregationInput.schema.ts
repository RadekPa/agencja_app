import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictPriceTypeCountOrderByAggregateInputObjectSchema as dictPriceTypeCountOrderByAggregateInputObjectSchema } from './dictPriceTypeCountOrderByAggregateInput.schema';
import { dictPriceTypeAvgOrderByAggregateInputObjectSchema as dictPriceTypeAvgOrderByAggregateInputObjectSchema } from './dictPriceTypeAvgOrderByAggregateInput.schema';
import { dictPriceTypeMaxOrderByAggregateInputObjectSchema as dictPriceTypeMaxOrderByAggregateInputObjectSchema } from './dictPriceTypeMaxOrderByAggregateInput.schema';
import { dictPriceTypeMinOrderByAggregateInputObjectSchema as dictPriceTypeMinOrderByAggregateInputObjectSchema } from './dictPriceTypeMinOrderByAggregateInput.schema';
import { dictPriceTypeSumOrderByAggregateInputObjectSchema as dictPriceTypeSumOrderByAggregateInputObjectSchema } from './dictPriceTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PriceTypeID: SortOrderSchema.optional(),
  PriceTypeDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PriceTypePL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictPriceTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictPriceTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictPriceTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictPriceTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictPriceTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictPriceTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictPriceTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeOrderByWithAggregationInput>;
export const dictPriceTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
