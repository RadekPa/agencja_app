import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransactionDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransactionDetailInput.schema';
import { ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectSchema as ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectSchema } from './ArTransactionCreateOrConnectWithoutArTransactionDetailInput.schema';
import { ArTransactionUpsertWithoutArTransactionDetailInputObjectSchema as ArTransactionUpsertWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUpsertWithoutArTransactionDetailInput.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema';
import { ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInputObjectSchema as ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInput.schema';
import { ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema as ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUpdateWithoutArTransactionDetailInput.schema';
import { ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema as ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArTransactionDetailInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransactionDetailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ArTransactionCreateOrConnectWithoutArTransactionDetailInputObjectSchema).optional(),
  upsert: z.lazy(() => ArTransactionUpsertWithoutArTransactionDetailInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ArTransactionWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ArTransactionWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema)]).optional()
}).strict();
export const ArTransactionUpdateOneWithoutArTransactionDetailNestedInputObjectSchema: z.ZodType<Prisma.ArTransactionUpdateOneWithoutArTransactionDetailNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpdateOneWithoutArTransactionDetailNestedInput>;
export const ArTransactionUpdateOneWithoutArTransactionDetailNestedInputObjectZodSchema = makeSchema();
