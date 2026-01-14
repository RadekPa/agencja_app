import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AuthorID: SortOrderSchema.optional()
}).strict();
export const tblAuthorsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAuthorsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAuthorsSumOrderByAggregateInput>;
export const tblAuthorsSumOrderByAggregateInputObjectZodSchema = makeSchema();
