import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ItemID: z.literal(true).optional(),
  TransactionID: z.literal(true).optional(),
  AccountID: z.literal(true).optional(),
  Amount: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ArTransactionDetailCountAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCountAggregateInputType>;
export const ArTransactionDetailCountAggregateInputObjectZodSchema = makeSchema();
