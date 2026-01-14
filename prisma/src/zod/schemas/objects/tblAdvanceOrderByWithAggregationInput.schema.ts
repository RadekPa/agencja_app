import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAdvanceCountOrderByAggregateInputObjectSchema as tblAdvanceCountOrderByAggregateInputObjectSchema } from './tblAdvanceCountOrderByAggregateInput.schema';
import { tblAdvanceAvgOrderByAggregateInputObjectSchema as tblAdvanceAvgOrderByAggregateInputObjectSchema } from './tblAdvanceAvgOrderByAggregateInput.schema';
import { tblAdvanceMaxOrderByAggregateInputObjectSchema as tblAdvanceMaxOrderByAggregateInputObjectSchema } from './tblAdvanceMaxOrderByAggregateInput.schema';
import { tblAdvanceMinOrderByAggregateInputObjectSchema as tblAdvanceMinOrderByAggregateInputObjectSchema } from './tblAdvanceMinOrderByAggregateInput.schema';
import { tblAdvanceSumOrderByAggregateInputObjectSchema as tblAdvanceSumOrderByAggregateInputObjectSchema } from './tblAdvanceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  AdvID: SortOrderSchema.optional(),
  Inst: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AdvTermId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTypeId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Amount: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AdvTermDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblAdvanceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblAdvanceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblAdvanceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblAdvanceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblAdvanceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblAdvanceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblAdvanceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceOrderByWithAggregationInput>;
export const tblAdvanceOrderByWithAggregationInputObjectZodSchema = makeSchema();
