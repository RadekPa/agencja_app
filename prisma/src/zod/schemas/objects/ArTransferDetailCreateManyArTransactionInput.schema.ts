import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  DebitID: z.number().int(),
  AmtWired: z.number().optional().nullable(),
  Notes: z.string().optional().nullable()
}).strict();
export const ArTransferDetailCreateManyArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailCreateManyArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailCreateManyArTransactionInput>;
export const ArTransferDetailCreateManyArTransactionInputObjectZodSchema = makeSchema();
