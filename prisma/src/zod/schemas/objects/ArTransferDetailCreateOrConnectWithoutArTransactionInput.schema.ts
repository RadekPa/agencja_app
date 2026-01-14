import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './ArTransferDetailWhereUniqueInput.schema';
import { ArTransferDetailCreateWithoutArTransactionInputObjectSchema as ArTransferDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailCreateWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedCreateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ArTransferDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailCreateOrConnectWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailCreateOrConnectWithoutArTransactionInput>;
export const ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectZodSchema = makeSchema();
