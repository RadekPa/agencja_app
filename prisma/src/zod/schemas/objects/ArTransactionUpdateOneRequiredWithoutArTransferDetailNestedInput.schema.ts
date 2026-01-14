import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateWithoutArTransferDetailInputObjectSchema as ArTransactionCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionCreateWithoutArTransferDetailInput.schema';
import { ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema as ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArTransferDetailInput.schema';
import { ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectSchema as ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectSchema } from './ArTransactionCreateOrConnectWithoutArTransferDetailInput.schema';
import { ArTransactionUpsertWithoutArTransferDetailInputObjectSchema as ArTransactionUpsertWithoutArTransferDetailInputObjectSchema } from './ArTransactionUpsertWithoutArTransferDetailInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema';
import { ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInputObjectSchema as ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInputObjectSchema } from './ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInput.schema';
import { ArTransactionUpdateWithoutArTransferDetailInputObjectSchema as ArTransactionUpdateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUpdateWithoutArTransferDetailInput.schema';
import { ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema as ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArTransferDetailInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArTransferDetailInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ArTransactionCreateOrConnectWithoutArTransferDetailInputObjectSchema).optional(),
  upsert: z.lazy(() => ArTransactionUpsertWithoutArTransferDetailInputObjectSchema).optional(),
  connect: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUpdateWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema)]).optional()
}).strict();
export const ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInputObjectSchema: z.ZodType<Prisma.ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInput>;
export const ArTransactionUpdateOneRequiredWithoutArTransferDetailNestedInputObjectZodSchema = makeSchema();
