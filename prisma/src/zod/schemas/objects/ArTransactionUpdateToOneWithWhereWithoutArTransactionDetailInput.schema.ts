import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema';
import { ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema as ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUpdateWithoutArTransactionDetailInput.schema';
import { ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema as ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArTransactionDetailInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ArTransactionUpdateWithoutArTransactionDetailInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArTransactionDetailInputObjectSchema)])
}).strict();
export const ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInputObjectSchema: z.ZodType<Prisma.ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInput>;
export const ArTransactionUpdateToOneWithWhereWithoutArTransactionDetailInputObjectZodSchema = makeSchema();
