import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ItemID: z.number().int().optional(),
  AccountID: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable()
}).strict();
export const ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUncheckedCreateWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUncheckedCreateWithoutArTransactionInput>;
export const ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectZodSchema = makeSchema();
