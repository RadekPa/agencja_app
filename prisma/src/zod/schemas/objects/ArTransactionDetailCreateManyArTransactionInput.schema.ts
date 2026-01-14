import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable()
}).strict();
export const ArTransactionDetailCreateManyArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailCreateManyArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateManyArTransactionInput>;
export const ArTransactionDetailCreateManyArTransactionInputObjectZodSchema = makeSchema();
