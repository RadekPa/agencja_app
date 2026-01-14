import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransactionType: SortOrderSchema.optional(),
  DefaultDebitAccount: SortOrderSchema.optional(),
  DefaultCreditAccount: SortOrderSchema.optional()
}).strict();
export const ArDefaultAccountMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountMaxOrderByAggregateInput>;
export const ArDefaultAccountMaxOrderByAggregateInputObjectZodSchema = makeSchema();
