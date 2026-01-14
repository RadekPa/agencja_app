import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictArticlesCountOrderByAggregateInputObjectSchema as dictArticlesCountOrderByAggregateInputObjectSchema } from './dictArticlesCountOrderByAggregateInput.schema';
import { dictArticlesMaxOrderByAggregateInputObjectSchema as dictArticlesMaxOrderByAggregateInputObjectSchema } from './dictArticlesMaxOrderByAggregateInput.schema';
import { dictArticlesMinOrderByAggregateInputObjectSchema as dictArticlesMinOrderByAggregateInputObjectSchema } from './dictArticlesMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  Article: SortOrderSchema.optional(),
  LangAbb: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => dictArticlesCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => dictArticlesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => dictArticlesMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const dictArticlesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.dictArticlesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesOrderByWithAggregationInput>;
export const dictArticlesOrderByWithAggregationInputObjectZodSchema = makeSchema();
