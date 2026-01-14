import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictTitMainClassCountOrderByAggregateInputObjectSchema as dictTitMainClassCountOrderByAggregateInputObjectSchema } from './dictTitMainClassCountOrderByAggregateInput.schema';
import { dictTitMainClassMaxOrderByAggregateInputObjectSchema as dictTitMainClassMaxOrderByAggregateInputObjectSchema } from './dictTitMainClassMaxOrderByAggregateInput.schema';
import { dictTitMainClassMinOrderByAggregateInputObjectSchema as dictTitMainClassMinOrderByAggregateInputObjectSchema } from './dictTitMainClassMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  ClassDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictTitMainClassCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictTitMainClassMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictTitMainClassMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictTitMainClassOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictTitMainClassOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassOrderByWithAggregationInput>;
export const dictTitMainClassOrderByWithAggregationInputObjectZodSchema = makeSchema();
