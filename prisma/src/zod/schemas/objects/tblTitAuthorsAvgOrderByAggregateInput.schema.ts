import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional(),
  TitleID: SortOrderSchema.optional(),
  Main: SortOrderSchema.optional(),
  Lp: SortOrderSchema.optional()
}).strict();
export const tblTitAuthorsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblTitAuthorsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitAuthorsAvgOrderByAggregateInput>;
export const tblTitAuthorsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
