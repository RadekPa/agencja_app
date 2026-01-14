import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema';
import { ArTransactionCreateWithoutArApplyInputObjectSchema as ArTransactionCreateWithoutArApplyInputObjectSchema } from './ArTransactionCreateWithoutArApplyInput.schema';
import { ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema as ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArApplyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema)])
}).strict();
export const ArTransactionCreateOrConnectWithoutArApplyInputObjectSchema: z.ZodType<Prisma.ArTransactionCreateOrConnectWithoutArApplyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCreateOrConnectWithoutArApplyInput>;
export const ArTransactionCreateOrConnectWithoutArApplyInputObjectZodSchema = makeSchema();
