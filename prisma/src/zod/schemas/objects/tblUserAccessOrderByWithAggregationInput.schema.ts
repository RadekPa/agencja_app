import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblUserAccessCountOrderByAggregateInputObjectSchema as tblUserAccessCountOrderByAggregateInputObjectSchema } from './tblUserAccessCountOrderByAggregateInput.schema';
import { tblUserAccessAvgOrderByAggregateInputObjectSchema as tblUserAccessAvgOrderByAggregateInputObjectSchema } from './tblUserAccessAvgOrderByAggregateInput.schema';
import { tblUserAccessMaxOrderByAggregateInputObjectSchema as tblUserAccessMaxOrderByAggregateInputObjectSchema } from './tblUserAccessMaxOrderByAggregateInput.schema';
import { tblUserAccessMinOrderByAggregateInputObjectSchema as tblUserAccessMinOrderByAggregateInputObjectSchema } from './tblUserAccessMinOrderByAggregateInput.schema';
import { tblUserAccessSumOrderByAggregateInputObjectSchema as tblUserAccessSumOrderByAggregateInputObjectSchema } from './tblUserAccessSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  PlaceID: SortOrderSchema.optional(),
  _count: z.lazy(() => tblUserAccessCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblUserAccessAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblUserAccessMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblUserAccessMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblUserAccessSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblUserAccessOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblUserAccessOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserAccessOrderByWithAggregationInput>;
export const tblUserAccessOrderByWithAggregationInputObjectZodSchema = makeSchema();
