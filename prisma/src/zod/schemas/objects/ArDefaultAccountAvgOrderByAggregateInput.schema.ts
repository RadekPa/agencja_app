import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransactionType: SortOrderSchema.optional(),
  DefaultDebitAccount: SortOrderSchema.optional(),
  DefaultCreditAccount: SortOrderSchema.optional()
}).strict();
export const ArDefaultAccountAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountAvgOrderByAggregateInput>;
export const ArDefaultAccountAvgOrderByAggregateInputObjectZodSchema = makeSchema();
