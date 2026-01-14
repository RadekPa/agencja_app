import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailScalarWhereInputObjectSchema as ArTransferDetailScalarWhereInputObjectSchema } from './ArTransferDetailScalarWhereInput.schema';
import { ArTransferDetailUpdateManyMutationInputObjectSchema as ArTransferDetailUpdateManyMutationInputObjectSchema } from './ArTransferDetailUpdateManyMutationInput.schema';
import { ArTransferDetailUncheckedUpdateManyWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedUpdateManyWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedUpdateManyWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ArTransferDetailUpdateManyMutationInputObjectSchema), z.lazy(() => ArTransferDetailUncheckedUpdateManyWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransferDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUpdateManyWithWhereWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUpdateManyWithWhereWithoutArTransactionInput>;
export const ArTransferDetailUpdateManyWithWhereWithoutArTransactionInputObjectZodSchema = makeSchema();
