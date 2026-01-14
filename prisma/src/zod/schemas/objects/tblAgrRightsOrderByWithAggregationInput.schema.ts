import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrRightsCountOrderByAggregateInputObjectSchema as tblAgrRightsCountOrderByAggregateInputObjectSchema } from './tblAgrRightsCountOrderByAggregateInput.schema';
import { tblAgrRightsAvgOrderByAggregateInputObjectSchema as tblAgrRightsAvgOrderByAggregateInputObjectSchema } from './tblAgrRightsAvgOrderByAggregateInput.schema';
import { tblAgrRightsMaxOrderByAggregateInputObjectSchema as tblAgrRightsMaxOrderByAggregateInputObjectSchema } from './tblAgrRightsMaxOrderByAggregateInput.schema';
import { tblAgrRightsMinOrderByAggregateInputObjectSchema as tblAgrRightsMinOrderByAggregateInputObjectSchema } from './tblAgrRightsMinOrderByAggregateInput.schema';
import { tblAgrRightsSumOrderByAggregateInputObjectSchema as tblAgrRightsSumOrderByAggregateInputObjectSchema } from './tblAgrRightsSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AgrRightID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RightID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PriceTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyPriceTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyAccountIntervalID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DistID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblAgrRightsCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblAgrRightsAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblAgrRightsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblAgrRightsMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblAgrRightsSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblAgrRightsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblAgrRightsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsOrderByWithAggregationInput>;
export const tblAgrRightsOrderByWithAggregationInputObjectZodSchema = makeSchema();
