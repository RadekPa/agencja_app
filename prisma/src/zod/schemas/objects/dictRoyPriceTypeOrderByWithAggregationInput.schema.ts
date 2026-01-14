import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictRoyPriceTypeCountOrderByAggregateInputObjectSchema as dictRoyPriceTypeCountOrderByAggregateInputObjectSchema } from './dictRoyPriceTypeCountOrderByAggregateInput.schema';
import { dictRoyPriceTypeAvgOrderByAggregateInputObjectSchema as dictRoyPriceTypeAvgOrderByAggregateInputObjectSchema } from './dictRoyPriceTypeAvgOrderByAggregateInput.schema';
import { dictRoyPriceTypeMaxOrderByAggregateInputObjectSchema as dictRoyPriceTypeMaxOrderByAggregateInputObjectSchema } from './dictRoyPriceTypeMaxOrderByAggregateInput.schema';
import { dictRoyPriceTypeMinOrderByAggregateInputObjectSchema as dictRoyPriceTypeMinOrderByAggregateInputObjectSchema } from './dictRoyPriceTypeMinOrderByAggregateInput.schema';
import { dictRoyPriceTypeSumOrderByAggregateInputObjectSchema as dictRoyPriceTypeSumOrderByAggregateInputObjectSchema } from './dictRoyPriceTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: SortOrderSchema.optional(),
  RoyPriceTypeDesc: SortOrderSchema.optional(),
  RoyPriceTypePL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictRoyPriceTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictRoyPriceTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictRoyPriceTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictRoyPriceTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictRoyPriceTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeOrderByWithAggregationInput>;
export const dictRoyPriceTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
