import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictAgrTemplatesCountOrderByAggregateInputObjectSchema as dictAgrTemplatesCountOrderByAggregateInputObjectSchema } from './dictAgrTemplatesCountOrderByAggregateInput.schema';
import { dictAgrTemplatesMaxOrderByAggregateInputObjectSchema as dictAgrTemplatesMaxOrderByAggregateInputObjectSchema } from './dictAgrTemplatesMaxOrderByAggregateInput.schema';
import { dictAgrTemplatesMinOrderByAggregateInputObjectSchema as dictAgrTemplatesMinOrderByAggregateInputObjectSchema } from './dictAgrTemplatesMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Name: SortOrderSchema.optional(),
  FileName: SortOrderSchema.optional(),
  _count: z.lazy(() => dictAgrTemplatesCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictAgrTemplatesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictAgrTemplatesMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictAgrTemplatesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictAgrTemplatesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictAgrTemplatesOrderByWithAggregationInput>;
export const dictAgrTemplatesOrderByWithAggregationInputObjectZodSchema = makeSchema();
