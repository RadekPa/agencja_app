import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './ArTransactionWhereInput.schema';
import { ArTransactionUpdateWithoutArApplyInputObjectSchema as ArTransactionUpdateWithoutArApplyInputObjectSchema } from './ArTransactionUpdateWithoutArApplyInput.schema';
import { ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema as ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema } from './ArTransactionUncheckedUpdateWithoutArApplyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ArTransactionUpdateWithoutArApplyInputObjectSchema), z.lazy(() => ArTransactionUncheckedUpdateWithoutArApplyInputObjectSchema)])
}).strict();
export const ArTransactionUpdateToOneWithWhereWithoutArApplyInputObjectSchema: z.ZodType<Prisma.ArTransactionUpdateToOneWithWhereWithoutArApplyInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionUpdateToOneWithWhereWithoutArApplyInput>;
export const ArTransactionUpdateToOneWithWhereWithoutArApplyInputObjectZodSchema = makeSchema();
