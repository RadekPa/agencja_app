import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ArApplyCountOrderByAggregateInputObjectSchema as ArApplyCountOrderByAggregateInputObjectSchema } from './ArApplyCountOrderByAggregateInput.schema';
import { ArApplyAvgOrderByAggregateInputObjectSchema as ArApplyAvgOrderByAggregateInputObjectSchema } from './ArApplyAvgOrderByAggregateInput.schema';
import { ArApplyMaxOrderByAggregateInputObjectSchema as ArApplyMaxOrderByAggregateInputObjectSchema } from './ArApplyMaxOrderByAggregateInput.schema';
import { ArApplyMinOrderByAggregateInputObjectSchema as ArApplyMinOrderByAggregateInputObjectSchema } from './ArApplyMinOrderByAggregateInput.schema';
import { ArApplySumOrderByAggregateInputObjectSchema as ArApplySumOrderByAggregateInputObjectSchema } from './ArApplySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ApplyID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  CreditID: SortOrderSchema.optional(),
  TaxPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  AmtApplied: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalPerc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  GraalAmt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ApplyDate: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  TaxSet: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ArApplyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ArApplyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ArApplyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ArApplyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ArApplySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ArApplyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ArApplyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyOrderByWithAggregationInput>;
export const ArApplyOrderByWithAggregationInputObjectZodSchema = makeSchema();
