import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema as ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUpdateWithoutArTransactionDetailInput.schema';
import { ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema as ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArTransactionDetailInput.schema';
import { ArTransactionCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransactionDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransactionDetailInput.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema)]),
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema)]),
  where: z.lazy(() => ArTransactionWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionUpsertWithoutArTransactionDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionUpsertWithoutArTransactionDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpsertWithoutArTransactionDetailInput>;
export const ArTransactionUpsertWithoutArTransactionDetailInputObjectZodSchema = makeSchema();
