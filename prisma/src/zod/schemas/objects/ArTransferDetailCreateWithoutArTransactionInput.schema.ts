import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DebitID: z.number().int(),
  AmtWired: z.number().optional().nullable(),
  Notes: z.string().optional().nullable()
}).strict();
export const ArTransferDetailCreateWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailCreateWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailCreateWithoutArTransactionInput>;
export const ArTransferDetailCreateWithoutArTransactionInputObjectZodSchema = makeSchema();
