import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional()
}).strict();
export const BookAuthorSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.BookAuthorSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorSumOrderByAggregateInput>;
export const BookAuthorSumOrderByAggregateInputObjectZodSchema = makeSchema();
