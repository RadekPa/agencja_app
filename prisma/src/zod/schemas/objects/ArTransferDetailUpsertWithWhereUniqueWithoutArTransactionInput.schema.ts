import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './ArTransferDetailWhereUniqueInput.schema';
import { ArTransferDetailUpdateWithoutArTransactionInputObjectSchema as ArTransferDetailUpdateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUpdateWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedUpdateWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedUpdateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedUpdateWithoutArTransactionInput.schema';
import { ArTransferDetailCreateWithoutArTransactionInputObjectSchema as ArTransferDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailCreateWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedCreateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ArTransferDetailUpdateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUncheckedUpdateWithoutArTransactionInputObjectSchema)]),
  create: z.union([z.lazy(() => ArTransferDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInput>;
export const ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectZodSchema = makeSchema();
