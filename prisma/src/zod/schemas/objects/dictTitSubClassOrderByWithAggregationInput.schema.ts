import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictTitSubClassCountOrderByAggregateInputObjectSchema as dictTitSubClassCountOrderByAggregateInputObjectSchema } from './dictTitSubClassCountOrderByAggregateInput.schema';
import { dictTitSubClassMaxOrderByAggregateInputObjectSchema as dictTitSubClassMaxOrderByAggregateInputObjectSchema } from './dictTitSubClassMaxOrderByAggregateInput.schema';
import { dictTitSubClassMinOrderByAggregateInputObjectSchema as dictTitSubClassMinOrderByAggregateInputObjectSchema } from './dictTitSubClassMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  ClassCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SubClassDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictTitSubClassCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictTitSubClassMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictTitSubClassMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictTitSubClassOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictTitSubClassOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassOrderByWithAggregationInput>;
export const dictTitSubClassOrderByWithAggregationInputObjectZodSchema = makeSchema();
