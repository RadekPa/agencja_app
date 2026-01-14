import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './ArTransactionDetailWhereUniqueInput.schema';
import { ArTransactionDetailCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailCreateWithoutArTransactionInput.schema';
import { ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedCreateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ArTransactionDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailCreateOrConnectWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateOrConnectWithoutArTransactionInput>;
export const ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectZodSchema = makeSchema();
