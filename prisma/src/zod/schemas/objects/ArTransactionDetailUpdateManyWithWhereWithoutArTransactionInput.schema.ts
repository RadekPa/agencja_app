import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailScalarWhereInputObjectSchema as ArTransactionDetailScalarWhereInputObjectSchema } from './ArTransactionDetailScalarWhereInput.schema';
import { ArTransactionDetailUpdateManyMutationInputObjectSchema as ArTransactionDetailUpdateManyMutationInputObjectSchema } from './ArTransactionDetailUpdateManyMutationInput.schema';
import { ArTransactionDetailUncheckedUpdateManyWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedUpdateManyWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedUpdateManyWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionDetailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ArTransactionDetailUpdateManyMutationInputObjectSchema), z.lazy(() => ArTransactionDetailUncheckedUpdateManyWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInput>;
export const ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInputObjectZodSchema = makeSchema();
