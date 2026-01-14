import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ItemID: z.literal(true).optional(),
  TransactionID: z.literal(true).optional(),
  AccountID: z.literal(true).optional(),
  Amount: z.literal(true).optional()
}).strict();
export const ArTransactionDetailAvgAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailAvgAggregateInputType>;
export const ArTransactionDetailAvgAggregateInputObjectZodSchema = makeSchema();
