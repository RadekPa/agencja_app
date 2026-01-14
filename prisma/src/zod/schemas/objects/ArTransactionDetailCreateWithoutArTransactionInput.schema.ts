import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable()
}).strict();
export const ArTransactionDetailCreateWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailCreateWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateWithoutArTransactionInput>;
export const ArTransactionDetailCreateWithoutArTransactionInputObjectZodSchema = makeSchema();
