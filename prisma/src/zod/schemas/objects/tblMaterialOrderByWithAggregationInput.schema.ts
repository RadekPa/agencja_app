import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblMaterialCountOrderByAggregateInputObjectSchema as tblMaterialCountOrderByAggregateInputObjectSchema } from './tblMaterialCountOrderByAggregateInput.schema';
import { tblMaterialAvgOrderByAggregateInputObjectSchema as tblMaterialAvgOrderByAggregateInputObjectSchema } from './tblMaterialAvgOrderByAggregateInput.schema';
import { tblMaterialMaxOrderByAggregateInputObjectSchema as tblMaterialMaxOrderByAggregateInputObjectSchema } from './tblMaterialMaxOrderByAggregateInput.schema';
import { tblMaterialMinOrderByAggregateInputObjectSchema as tblMaterialMinOrderByAggregateInputObjectSchema } from './tblMaterialMinOrderByAggregateInput.schema';
import { tblMaterialSumOrderByAggregateInputObjectSchema as tblMaterialSumOrderByAggregateInputObjectSchema } from './tblMaterialSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  MatID: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  MatTypeID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional(),
  Currency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Remarks: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RequestDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ReceiveDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblMaterialCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblMaterialAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblMaterialMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblMaterialMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblMaterialSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblMaterialOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblMaterialOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMaterialOrderByWithAggregationInput>;
export const tblMaterialOrderByWithAggregationInputObjectZodSchema = makeSchema();
