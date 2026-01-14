import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema';
import { ArTransactionCreateWithoutArTransferDetailInputObjectSchema as ArTransactionCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransferDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransferDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema)])
}).strict();
export const ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionCreateOrConnectWithoutArTransferDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCreateOrConnectWithoutArTransferDetailInput>;
export const ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectZodSchema = makeSchema();
