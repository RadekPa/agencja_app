import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional()
}).strict();
export const ArTransactionTypeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeAvgOrderByAggregateInput>;
export const ArTransactionTypeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
