import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './ArTransferDetailWhereUniqueInput.schema';
import { ArTransferDetailUpdateWithoutArTransactionInputObjectSchema as ArTransferDetailUpdateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUpdateWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedUpdateWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedUpdateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedUpdateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ArTransferDetailUpdateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUncheckedUpdateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInput>;
export const ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectZodSchema = makeSchema();
