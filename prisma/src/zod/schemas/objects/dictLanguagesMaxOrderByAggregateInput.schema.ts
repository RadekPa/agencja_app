import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  LangAbb: SortOrderSchema.optional(),
  LangDesc: SortOrderSchema.optional(),
  LangPL: SortOrderSchema.optional()
}).strict();
export const dictLanguagesMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictLanguagesMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesMaxOrderByAggregateInput>;
export const dictLanguagesMaxOrderByAggregateInputObjectZodSchema = makeSchema();
