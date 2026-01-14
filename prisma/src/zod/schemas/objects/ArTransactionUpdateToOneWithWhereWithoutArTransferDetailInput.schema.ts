import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema';
import { ArTransactionUpdateWithoutArTransferDetailInputObjectSchema as ArTransactionUpdateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUpdateWithoutArTransferDetailInput.schema';
import { ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema as ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArTransferDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ArTransactionUpdateWithoutArTransferDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArTransferDetailInputObjectSchema)])
}).strict();
export const ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInput>;
export const ArTransactionUpdateToOneWithWhereWithoutArTransferDetailInputObjectZodSchema = makeSchema();
