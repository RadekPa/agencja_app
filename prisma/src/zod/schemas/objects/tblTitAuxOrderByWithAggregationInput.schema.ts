import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblTitAuxCountOrderByAggregateInputObjectSchema as tblTitAuxCountOrderByAggregateInputObjectSchema } from './tblTitAuxCountOrderByAggregateInput.schema';
import { tblTitAuxAvgOrderByAggregateInputObjectSchema as tblTitAuxAvgOrderByAggregateInputObjectSchema } from './tblTitAuxAvgOrderByAggregateInput.schema';
import { tblTitAuxMaxOrderByAggregateInputObjectSchema as tblTitAuxMaxOrderByAggregateInputObjectSchema } from './tblTitAuxMaxOrderByAggregateInput.schema';
import { tblTitAuxMinOrderByAggregateInputObjectSchema as tblTitAuxMinOrderByAggregateInputObjectSchema } from './tblTitAuxMinOrderByAggregateInput.schema';
import { tblTitAuxSumOrderByAggregateInputObjectSchema as tblTitAuxSumOrderByAggregateInputObjectSchema } from './tblTitAuxSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  TitleID: SortOrderSchema.optional(),
  CopyrightLine: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblTitAuxCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblTitAuxAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblTitAuxMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblTitAuxMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblTitAuxSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblTitAuxOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblTitAuxOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuxOrderByWithAggregationInput>;
export const tblTitAuxOrderByWithAggregationInputObjectZodSchema = makeSchema();
