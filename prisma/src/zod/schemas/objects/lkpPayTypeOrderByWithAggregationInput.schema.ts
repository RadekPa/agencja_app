import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { lkpPayTypeCountOrderByAggregateInputObjectSchema as lkpPayTypeCountOrderByAggregateInputObjectSchema } from './lkpPayTypeCountOrderByAggregateInput.schema';
import { lkpPayTypeAvgOrderByAggregateInputObjectSchema as lkpPayTypeAvgOrderByAggregateInputObjectSchema } from './lkpPayTypeAvgOrderByAggregateInput.schema';
import { lkpPayTypeMaxOrderByAggregateInputObjectSchema as lkpPayTypeMaxOrderByAggregateInputObjectSchema } from './lkpPayTypeMaxOrderByAggregateInput.schema';
import { lkpPayTypeMinOrderByAggregateInputObjectSchema as lkpPayTypeMinOrderByAggregateInputObjectSchema } from './lkpPayTypeMinOrderByAggregateInput.schema';
import { lkpPayTypeSumOrderByAggregateInputObjectSchema as lkpPayTypeSumOrderByAggregateInputObjectSchema } from './lkpPayTypeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PayTypeID: SortOrderSchema.optional(),
  Description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DescriptionPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => lkpPayTypeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => lkpPayTypeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => lkpPayTypeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => lkpPayTypeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => lkpPayTypeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const lkpPayTypeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.lkpPayTypeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.lkpPayTypeOrderByWithAggregationInput>;
export const lkpPayTypeOrderByWithAggregationInputObjectZodSchema = makeSchema();
