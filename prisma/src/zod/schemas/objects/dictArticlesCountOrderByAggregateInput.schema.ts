import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Article: SortOrderSchema.optional(),
  LangAbb: SortOrderSchema.optional()
}).strict();
export const dictArticlesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictArticlesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesCountOrderByAggregateInput>;
export const dictArticlesCountOrderByAggregateInputObjectZodSchema = makeSchema();
