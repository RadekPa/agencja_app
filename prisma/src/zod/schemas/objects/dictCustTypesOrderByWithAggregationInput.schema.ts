import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictCustTypesCountOrderByAggregateInputObjectSchema as dictCustTypesCountOrderByAggregateInputObjectSchema } from './dictCustTypesCountOrderByAggregateInput.schema';
import { dictCustTypesAvgOrderByAggregateInputObjectSchema as dictCustTypesAvgOrderByAggregateInputObjectSchema } from './dictCustTypesAvgOrderByAggregateInput.schema';
import { dictCustTypesMaxOrderByAggregateInputObjectSchema as dictCustTypesMaxOrderByAggregateInputObjectSchema } from './dictCustTypesMaxOrderByAggregateInput.schema';
import { dictCustTypesMinOrderByAggregateInputObjectSchema as dictCustTypesMinOrderByAggregateInputObjectSchema } from './dictCustTypesMinOrderByAggregateInput.schema';
import { dictCustTypesSumOrderByAggregateInputObjectSchema as dictCustTypesSumOrderByAggregateInputObjectSchema } from './dictCustTypesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CustTypeID: SortOrderSchema.optional(),
  CustTypeName: SortOrderSchema.optional(),
  CustTypeDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictCustTypesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictCustTypesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictCustTypesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictCustTypesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictCustTypesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictCustTypesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictCustTypesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCustTypesOrderByWithAggregationInput>;
export const dictCustTypesOrderByWithAggregationInputObjectZodSchema = makeSchema();
