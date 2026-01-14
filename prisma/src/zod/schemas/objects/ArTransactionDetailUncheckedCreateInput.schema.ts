import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ItemID: z.number().int().optional(),
  TransactionID: z.number().int().optional().nullable(),
  AccountID: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable()
}).strict();
export const ArTransactionDetailUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUncheckedCreateInput>;
export const ArTransactionDetailUncheckedCreateInputObjectZodSchema = makeSchema();
