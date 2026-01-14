import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  LangAbb: SortOrderSchema.optional(),
  LangDesc: SortOrderSchema.optional(),
  LangPL: SortOrderSchema.optional()
}).strict();
export const dictLanguagesMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictLanguagesMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesMinOrderByAggregateInput>;
export const dictLanguagesMinOrderByAggregateInputObjectZodSchema = makeSchema();
