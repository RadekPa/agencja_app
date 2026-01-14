import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionArgsObjectSchema as ArTransactionArgsObjectSchema } from './ArTransactionArgs.schema'

const makeSchema = () => z.object({
  ItemID: z.boolean().optional(),
  TransactionID: z.boolean().optional(),
  AccountID: z.boolean().optional(),
  Amount: z.boolean().optional(),
  ArTransaction: z.union([z.boolean(), z.lazy(() => ArTransactionArgsObjectSchema)]).optional()
}).strict();
export const ArTransactionDetailSelectObjectSchema: z.ZodType<Prisma.ArTransactionDetailSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailSelect>;
export const ArTransactionDetailSelectObjectZodSchema = makeSchema();
