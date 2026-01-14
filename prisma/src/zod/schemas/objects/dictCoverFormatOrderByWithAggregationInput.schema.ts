import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictCoverFormatCountOrderByAggregateInputObjectSchema as dictCoverFormatCountOrderByAggregateInputObjectSchema } from './dictCoverFormatCountOrderByAggregateInput.schema';
import { dictCoverFormatAvgOrderByAggregateInputObjectSchema as dictCoverFormatAvgOrderByAggregateInputObjectSchema } from './dictCoverFormatAvgOrderByAggregateInput.schema';
import { dictCoverFormatMaxOrderByAggregateInputObjectSchema as dictCoverFormatMaxOrderByAggregateInputObjectSchema } from './dictCoverFormatMaxOrderByAggregateInput.schema';
import { dictCoverFormatMinOrderByAggregateInputObjectSchema as dictCoverFormatMinOrderByAggregateInputObjectSchema } from './dictCoverFormatMinOrderByAggregateInput.schema';
import { dictCoverFormatSumOrderByAggregateInputObjectSchema as dictCoverFormatSumOrderByAggregateInputObjectSchema } from './dictCoverFormatSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  CoverFormatID: SortOrderSchema.optional(),
  CoverFormatDesc: SortOrderSchema.optional(),
  _count: z.lazy(() => dictCoverFormatCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictCoverFormatAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictCoverFormatMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictCoverFormatMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictCoverFormatSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictCoverFormatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictCoverFormatOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCoverFormatOrderByWithAggregationInput>;
export const dictCoverFormatOrderByWithAggregationInputObjectZodSchema = makeSchema();
