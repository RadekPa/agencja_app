import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionUpdateWithoutArTransferDetailInputObjectSchema as ArTransactionUpdateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUpdateWithoutArTransferDetailInput.schema';
import { ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema as ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArTransferDetailInput.schema';
import { ArTransactionCreateWithoutArTransferDetailInputObjectSchema as ArTransactionCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransferDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransferDetailInput.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ArTransactionUpdateWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema)]),
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema)]),
  where: z.lazy(() => ArTransactionWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionUpsertWithoutArTransferDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionUpsertWithoutArTransferDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpsertWithoutArTransferDetailInput>;
export const ArTransactionUpsertWithoutArTransferDetailInputObjectZodSchema = makeSchema();
