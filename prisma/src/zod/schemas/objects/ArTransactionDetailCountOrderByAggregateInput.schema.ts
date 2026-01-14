import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ItemID: SortOrderSchema.optional(),
  TransactionID: SortOrderSchema.optional(),
  AccountID: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional()
}).strict();
export const ArTransactionDetailCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCountOrderByAggregateInput>;
export const ArTransactionDetailCountOrderByAggregateInputObjectZodSchema = makeSchema();
