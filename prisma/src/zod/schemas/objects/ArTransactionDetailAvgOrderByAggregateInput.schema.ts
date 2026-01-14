import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ItemID: SortOrderSchema.optional(),
  TransactionID: SortOrderSchema.optional(),
  AccountID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const ArTransactionDetailAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailAvgOrderByAggregateInput>;
export const ArTransactionDetailAvgOrderByAggregateInputObjectZodSchema = makeSchema();
