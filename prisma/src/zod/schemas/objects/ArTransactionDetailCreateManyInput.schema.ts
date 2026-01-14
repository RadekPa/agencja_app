import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionID: z.number().int().optional().nullable(),
  AccountID: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable()
}).strict();
export const ArTransactionDetailCreateManyInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateManyInput>;
export const ArTransactionDetailCreateManyInputObjectZodSchema = makeSchema();
