import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateNestedOneWithoutArTransferDetailInputObjectSchema as ArTransactionCreateNestedOneWithoutArTransferDetailInputObjectSchema } from './ArTransactionCreateNestedOneWithoutArTransferDetailInput.schema'

const makeSchema = () => z.object({
  DebitID: z.number().int(),
  AmtWired: z.number().optional().nullable(),
  Notes: z.string().optional().nullable(),
  ArTransaction: z.lazy(() => ArTransactionCreateNestedOneWithoutArTransferDetailInputObjectSchema)
}).strict();
export const ArTransferDetailCreateInputObjectSchema: z.ZodType<Prisma.ArTransferDetailCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailCreateInput>;
export const ArTransferDetailCreateInputObjectZodSchema = makeSchema();
