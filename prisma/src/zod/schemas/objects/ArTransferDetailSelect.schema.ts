import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionArgsObjectSchema as ArTransactionArgsObjectSchema } from './ArTransactionArgs.schema'

const makeSchema = () => z.object({
  TransferID: z.boolean().optional(),
  DebitID: z.boolean().optional(),
  AmtWired: z.boolean().optional(),
  Notes: z.boolean().optional(),
  ArTransaction: z.union([z.boolean(), z.lazy(() => ArTransactionArgsObjectSchema)]).optional()
}).strict();
export const ArTransferDetailSelectObjectSchema: z.ZodType<Prisma.ArTransferDetailSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailSelect>;
export const ArTransferDetailSelectObjectZodSchema = makeSchema();
