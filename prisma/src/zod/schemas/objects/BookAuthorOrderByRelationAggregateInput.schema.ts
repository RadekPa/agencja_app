import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const BookAuthorOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.BookAuthorOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.BookAuthorOrderByRelationAggregateInput>;
export const BookAuthorOrderByRelationAggregateInputObjectZodSchema = makeSchema();
