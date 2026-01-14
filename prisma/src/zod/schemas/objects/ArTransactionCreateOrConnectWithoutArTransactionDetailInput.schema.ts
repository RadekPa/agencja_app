import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema';
import { ArTransactionCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransactionDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransactionDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema)])
}).strict();
export const ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionCreateOrConnectWithoutArTransactionDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCreateOrConnectWithoutArTransactionDetailInput>;
export const ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectZodSchema = makeSchema();
