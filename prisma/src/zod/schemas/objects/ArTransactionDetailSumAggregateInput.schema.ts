import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ItemID: z.literal(true).optional(),
  TransactionID: z.literal(true).optional(),
  AccountID: z.literal(true).optional(),
  Amount: z.literal(true).optional()
}).strict();
export const ArTransactionDetailSumAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailSumAggregateInputType>;
export const ArTransactionDetailSumAggregateInputObjectZodSchema = makeSchema();
