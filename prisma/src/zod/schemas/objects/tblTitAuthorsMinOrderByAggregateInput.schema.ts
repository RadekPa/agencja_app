import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  Main: SortOrderSchema.optional(),
  Lp: SortOrderSchema.optional()
}).strict();
export const tblTitAuthorsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsMinOrderByAggregateInput>;
export const tblTitAuthorsMinOrderByAggregateInputObjectZodSchema = makeSchema();
