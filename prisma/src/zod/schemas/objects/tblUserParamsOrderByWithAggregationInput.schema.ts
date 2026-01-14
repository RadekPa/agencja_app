import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblUserParamsCountOrderByAggregateInputObjectSchema as tblUserParamsCountOrderByAggregateInputObjectSchema } from './tblUserParamsCountOrderByAggregateInput.schema';
import { tblUserParamsMaxOrderByAggregateInputObjectSchema as tblUserParamsMaxOrderByAggregateInputObjectSchema } from './tblUserParamsMaxOrderByAggregateInput.schema';
import { tblUserParamsMinOrderByAggregateInputObjectSchema as tblUserParamsMinOrderByAggregateInputObjectSchema } from './tblUserParamsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Login: SortOrderSchema.optional(),
  Name: SortOrderSchema.optional(),
  Value: SortOrderSchema.optional(),
  _count: z.lazy(() => tblUserParamsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblUserParamsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblUserParamsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblUserParamsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblUserParamsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblUserParamsOrderByWithAggregationInput>;
export const tblUserParamsOrderByWithAggregationInputObjectZodSchema = makeSchema();
