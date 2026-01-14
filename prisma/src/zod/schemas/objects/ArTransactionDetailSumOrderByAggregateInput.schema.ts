import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ItemID: SortOrderSchema.optional(),
  TransactionID: SortOrderSchema.optional(),
  AccountID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const ArTransactionDetailSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailSumOrderByAggregateInput>;
export const ArTransactionDetailSumOrderByAggregateInputObjectZodSchema = makeSchema();
