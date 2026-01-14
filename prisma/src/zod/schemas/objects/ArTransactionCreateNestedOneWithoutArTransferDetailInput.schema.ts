import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateWithoutArTransferDetailInputObjectSchema as ArTransactionCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransferDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransferDetailInput.schema';
import { ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectSchema as ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectSchema } from './ArTransactionCreateOrConnectWithoutArTransferDetailInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectSchema).optional(),
  connect: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ArTransactionCreateNestedOneWithoutArTransferDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionCreateNestedOneWithoutArTransferDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCreateNestedOneWithoutArTransferDetailInput>;
export const ArTransactionCreateNestedOneWithoutArTransferDetailInputObjectZodSchema = makeSchema();
