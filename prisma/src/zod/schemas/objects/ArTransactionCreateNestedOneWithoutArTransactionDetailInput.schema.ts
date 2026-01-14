import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransactionDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransactionDetailInput.schema';
import { ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectSchema as ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectSchema } from './ArTransactionCreateOrConnectWithoutArTransactionDetailInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectSchema).optional(),
  connect: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ArTransactionCreateNestedOneWithoutArTransactionDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionCreateNestedOneWithoutArTransactionDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCreateNestedOneWithoutArTransactionDetailInput>;
export const ArTransactionCreateNestedOneWithoutArTransactionDetailInputObjectZodSchema = makeSchema();
