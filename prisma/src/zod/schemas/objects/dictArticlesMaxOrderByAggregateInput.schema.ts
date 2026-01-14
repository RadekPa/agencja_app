import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  Article: SortOrderSchema.optional(),
  LangAbb: SortOrderSchema.optional()
}).strict();
export const dictArticlesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictArticlesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictArticlesMaxOrderByAggregateInput>;
export const dictArticlesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
