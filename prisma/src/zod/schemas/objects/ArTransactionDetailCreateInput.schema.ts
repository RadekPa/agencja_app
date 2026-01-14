import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateNestedOneWithoutArTransactionDetailInputObjectSchema as ArTransactionCreateNestedOneWithoutArTransactionDetailInputObjectSchema } from './ArTransactionCreateNestedOneWithoutArTransactionDetailInput.schema'

const makeSchema = () => z.object({
  AccountID: z.number().int().optional().nullable(),
  Amount: z.number().optional().nullable(),
  ArTransaction: z.lazy(() => ArTransactionCreateNestedOneWithoutArTransactionDetailInputObjectSchema).optional()
}).strict();
export const ArTransactionDetailCreateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateInput>;
export const ArTransactionDetailCreateInputObjectZodSchema = makeSchema();
