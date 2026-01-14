import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional()
}).strict();
export const tblAuthorsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAuthorsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsAvgOrderByAggregateInput>;
export const tblAuthorsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
