import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ItemID: z.literal(true).optional(),
  TransactionID: z.literal(true).optional(),
  AccountID: z.literal(true).optional(),
  Amount: z.literal(true).optional()
}).strict();
export const ArTransactionDetailMinAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailMinAggregateInputType>;
export const ArTransactionDetailMinAggregateInputObjectZodSchema = makeSchema();
