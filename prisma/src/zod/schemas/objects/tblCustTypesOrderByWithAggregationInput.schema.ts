import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { tblCustTypesCountOrderByAggregateInputObjectSchema as tblCustTypesCountOrderByAggregateInputObjectSchema } from './tblCustTypesCountOrderByAggregateInput.schema';
import { tblCustTypesAvgOrderByAggregateInputObjectSchema as tblCustTypesAvgOrderByAggregateInputObjectSchema } from './tblCustTypesAvgOrderByAggregateInput.schema';
import { tblCustTypesMaxOrderByAggregateInputObjectSchema as tblCustTypesMaxOrderByAggregateInputObjectSchema } from './tblCustTypesMaxOrderByAggregateInput.schema';
import { tblCustTypesMinOrderByAggregateInputObjectSchema as tblCustTypesMinOrderByAggregateInputObjectSchema } from './tblCustTypesMinOrderByAggregateInput.schema';
import { tblCustTypesSumOrderByAggregateInputObjectSchema as tblCustTypesSumOrderByAggregateInputObjectSchema } from './tblCustTypesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional(),
  CustTypeID: SortOrderSchema.optional(),
  _count: z.lazy(() => tblCustTypesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblCustTypesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblCustTypesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblCustTypesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblCustTypesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblCustTypesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblCustTypesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustTypesOrderByWithAggregationInput>;
export const tblCustTypesOrderByWithAggregationInputObjectZodSchema = makeSchema();
