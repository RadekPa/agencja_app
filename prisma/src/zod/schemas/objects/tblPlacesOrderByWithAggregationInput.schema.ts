import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblPlacesCountOrderByAggregateInputObjectSchema as tblPlacesCountOrderByAggregateInputObjectSchema } from './tblPlacesCountOrderByAggregateInput.schema';
import { tblPlacesAvgOrderByAggregateInputObjectSchema as tblPlacesAvgOrderByAggregateInputObjectSchema } from './tblPlacesAvgOrderByAggregateInput.schema';
import { tblPlacesMaxOrderByAggregateInputObjectSchema as tblPlacesMaxOrderByAggregateInputObjectSchema } from './tblPlacesMaxOrderByAggregateInput.schema';
import { tblPlacesMinOrderByAggregateInputObjectSchema as tblPlacesMinOrderByAggregateInputObjectSchema } from './tblPlacesMinOrderByAggregateInput.schema';
import { tblPlacesSumOrderByAggregateInputObjectSchema as tblPlacesSumOrderByAggregateInputObjectSchema } from './tblPlacesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PlaceID: SortOrderSchema.optional(),
  PlaceDesc: SortOrderSchema.optional(),
  _count: z.lazy(() => tblPlacesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPlacesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPlacesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPlacesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPlacesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPlacesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPlacesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPlacesOrderByWithAggregationInput>;
export const tblPlacesOrderByWithAggregationInputObjectZodSchema = makeSchema();
