import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictRightsFormCountOrderByAggregateInputObjectSchema as dictRightsFormCountOrderByAggregateInputObjectSchema } from './dictRightsFormCountOrderByAggregateInput.schema';
import { dictRightsFormAvgOrderByAggregateInputObjectSchema as dictRightsFormAvgOrderByAggregateInputObjectSchema } from './dictRightsFormAvgOrderByAggregateInput.schema';
import { dictRightsFormMaxOrderByAggregateInputObjectSchema as dictRightsFormMaxOrderByAggregateInputObjectSchema } from './dictRightsFormMaxOrderByAggregateInput.schema';
import { dictRightsFormMinOrderByAggregateInputObjectSchema as dictRightsFormMinOrderByAggregateInputObjectSchema } from './dictRightsFormMinOrderByAggregateInput.schema';
import { dictRightsFormSumOrderByAggregateInputObjectSchema as dictRightsFormSumOrderByAggregateInputObjectSchema } from './dictRightsFormSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  RightFormID: SortOrderSchema.optional(),
  RightFormDesc: SortOrderSchema.optional(),
  RightFormPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RightFormAbbPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RightFormAbbEN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictRightsFormCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => dictRightsFormAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictRightsFormMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictRightsFormMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => dictRightsFormSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictRightsFormOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictRightsFormOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormOrderByWithAggregationInput>;
export const dictRightsFormOrderByWithAggregationInputObjectZodSchema = makeSchema();
