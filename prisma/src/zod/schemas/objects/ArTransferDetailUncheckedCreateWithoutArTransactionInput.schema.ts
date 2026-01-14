import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DebitID: z.number().int(),
  AmtWired: z.number().optional().nullable(),
  Notes: z.string().optional().nullable()
}).strict();
export const ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUncheckedCreateWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUncheckedCreateWithoutArTransactionInput>;
export const ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectZodSchema = makeSchema();
