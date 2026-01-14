import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionUpdateWithoutArApplyInputObjectSchema as ArTransactionUpdateWithoutArApplyInputObjectSchema } from './ArTransactionUpdateWithoutArApplyInput.schema';
import { ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema as ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArApplyInput.schema';
import { ArTransactionCreateWithoutArApplyInputObjectSchema as ArTransactionCreateWithoutArApplyInputObjectSchema } from './ArTransactionCreateWithoutArApplyInput.schema';
import { ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema as ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArApplyInput.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ArTransactionUpdateWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema)]),
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema)]),
  where: z.lazy(() => ArTransactionWhereInputObjectSchema).optional()
}).strict();
export const ArTransactionUpsertWithoutArApplyInputObjectSchema: z.ZodType<Prisma.ArTransactionUpsertWithoutArApplyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpsertWithoutArApplyInput>;
export const ArTransactionUpsertWithoutArApplyInputObjectZodSchema = makeSchema();
