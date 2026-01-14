import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateWithoutArApplyInputObjectSchema as ArTransactionCreateWithoutArApplyInputObjectSchema } from './ArTransactionCreateWithoutArApplyInput.schema';
import { ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema as ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArApplyInput.schema';
import { ArTransactionCreateOrConnectWithoutArApplyInputObjectSchema as ArTransactionCreateOrConnectWithoutArApplyInputObjectSchema } from './ArTransactionCreateOrConnectWithoutArApplyInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ArTransactionCreateOrConnectWithoutArApplyInputObjectSchema).optional(),
  connect: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ArTransactionCreateNestedOneWithoutArApplyInputObjectSchema: z.ZodType<Prisma.ArTransactionCreateNestedOneWithoutArApplyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionCreateNestedOneWithoutArApplyInput>;
export const ArTransactionCreateNestedOneWithoutArApplyInputObjectZodSchema = makeSchema();
