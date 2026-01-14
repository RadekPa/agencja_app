import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionCreateWithoutArApplyInputObjectSchema as ArTransactionCreateWithoutArApplyInputObjectSchema } from './ArTransactionCreateWithoutArApplyInput.schema';
import { ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema as ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema } from './ArTransactionUncheckedCreateWithoutArApplyInput.schema';
import { ArTransactionCreateOrConnectWithoutArApplyInputObjectSchema as ArTransactionCreateOrConnectWithoutArApplyInputObjectSchema } from './ArTransactionCreateOrConnectWithoutArApplyInput.schema';
import { ArTransactionUpsertWithoutArApplyInputObjectSchema as ArTransactionUpsertWithoutArApplyInputObjectSchema } from './ArTransactionUpsertWithoutArApplyInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './ArTransactionWhereUniqueInput.schema';
import { ArTransactionUpdateToOneWithWhereWithoutArApplyInputObjectSchema as ArTransactionUpdateToOneWithWhereWithoutArApplyInputObjectSchema } from './ArTransactionUpdateToOneWithWhereWithoutArApplyInput.schema';
import { ArTransactionUpdateWithoutArApplyInputObjectSchema as ArTransactionUpdateWithoutArApplyInputObjectSchema } from './ArTransactionUpdateWithoutArApplyInput.schema';
import { ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema as ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArApplyInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionCreateWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUncheckedCreateWithoutArApplyInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ArTransactionCreateOrConnectWithoutArApplyInputObjectSchema).optional(),
  upsert: z.lazy(() => ArTransactionUpsertWithoutArApplyInputObjectSchema).optional(),
  connect: z.lazy(() => ArTransactionWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ArTransactionUpdateToOneWithWhereWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUpdateWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema)]).optional()
}).strict();
export const ArTransactionUpdateOneRequiredWithoutArApplyNestedInputObjectSchema: z.ZodType<Prisma.ArTransactionUpdateOneRequiredWithoutArApplyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpdateOneRequiredWithoutArApplyNestedInput>;
export const ArTransactionUpdateOneRequiredWithoutArApplyNestedInputObjectZodSchema = makeSchema();
