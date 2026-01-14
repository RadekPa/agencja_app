import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { dictLanguagesCountOrderByAggregateInputObjectSchema as dictLanguagesCountOrderByAggregateInputObjectSchema } from './dictLanguagesCountOrderByAggregateInput.schema';
import { dictLanguagesMaxOrderByAggregateInputObjectSchema as dictLanguagesMaxOrderByAggregateInputObjectSchema } from './dictLanguagesMaxOrderByAggregateInput.schema';
import { dictLanguagesMinOrderByAggregateInputObjectSchema as dictLanguagesMinOrderByAggregateInputObjectSchema } from './dictLanguagesMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  LangAbb: SortOrderSchema.optional(),
  LangDesc: SortOrderSchema.optional(),
  LangPL: SortOrderSchema.optional(),
  _count: z.lazy(() => dictLanguagesCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictLanguagesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictLanguagesMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictLanguagesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictLanguagesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesOrderByWithAggregationInput>;
export const dictLanguagesOrderByWithAggregationInputObjectZodSchema = makeSchema();
