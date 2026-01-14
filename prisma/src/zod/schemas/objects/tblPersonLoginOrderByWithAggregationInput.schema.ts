import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblPersonLoginCountOrderByAggregateInputObjectSchema as tblPersonLoginCountOrderByAggregateInputObjectSchema } from './tblPersonLoginCountOrderByAggregateInput.schema';
import { tblPersonLoginAvgOrderByAggregateInputObjectSchema as tblPersonLoginAvgOrderByAggregateInputObjectSchema } from './tblPersonLoginAvgOrderByAggregateInput.schema';
import { tblPersonLoginMaxOrderByAggregateInputObjectSchema as tblPersonLoginMaxOrderByAggregateInputObjectSchema } from './tblPersonLoginMaxOrderByAggregateInput.schema';
import { tblPersonLoginMinOrderByAggregateInputObjectSchema as tblPersonLoginMinOrderByAggregateInputObjectSchema } from './tblPersonLoginMinOrderByAggregateInput.schema';
import { tblPersonLoginSumOrderByAggregateInputObjectSchema as tblPersonLoginSumOrderByAggregateInputObjectSchema } from './tblPersonLoginSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  PersonID: SortOrderSchema.optional(),
  Login: SortOrderSchema.optional(),
  DateBegin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DateEnd: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => tblPersonLoginCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => tblPersonLoginAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => tblPersonLoginMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => tblPersonLoginMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => tblPersonLoginSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const tblPersonLoginOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.tblPersonLoginOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPersonLoginOrderByWithAggregationInput>;
export const tblPersonLoginOrderByWithAggregationInputObjectZodSchema = makeSchema();
