import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  LangAbb: SortOrderSchema.optional(),
  LangDesc: SortOrderSchema.optional(),
  LangPL: SortOrderSchema.optional()
}).strict();
export const dictLanguagesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.dictLanguagesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCountOrderByAggregateInput>;
export const dictLanguagesCountOrderByAggregateInputObjectZodSchema = makeSchema();
