import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictAdvWithoutInvExcludeReasonCountOrderByAggregateInputObjectSchema as dictAdvWithoutInvExcludeReasonCountOrderByAggregateInputObjectSchema } from './dictAdvWithoutInvExcludeReasonCountOrderByAggregateInput.schema';
import { dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInputObjectSchema as dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInputObjectSchema } from './dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInput.schema';
import { dictAdvWithoutInvExcludeReasonMaxOrderByAggregateInputObjectSchema as dictAdvWithoutInvExcludeReasonMaxOrderByAggregateInputObjectSchema } from './dictAdvWithoutInvExcludeReasonMaxOrderByAggregateInput.schema';
import { dictAdvWithoutInvExcludeReasonMinOrderByAggregateInputObjectSchema as dictAdvWithoutInvExcludeReasonMinOrderByAggregateInputObjectSchema } from './dictAdvWithoutInvExcludeReasonMinOrderByAggregateInput.schema';
import { dictAdvWithoutInvExcludeReasonSumOrderByAggregateInputObjectSchema as dictAdvWithoutInvExcludeReasonSumOrderByAggregateInputObjectSchema } from './dictAdvWithoutInvExcludeReasonSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ExcludeReasonID: SortOrderSchema.optional(),
  ExcludeReasonCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ExcludeReasonDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictAdvWithoutInvExcludeReasonCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictAdvWithoutInvExcludeReasonAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictAdvWithoutInvExcludeReasonMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictAdvWithoutInvExcludeReasonMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictAdvWithoutInvExcludeReasonSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictAdvWithoutInvExcludeReasonOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAdvWithoutInvExcludeReasonOrderByWithAggregationInput>;
export const dictAdvWithoutInvExcludeReasonOrderByWithAggregationInputObjectZodSchema = makeSchema();
