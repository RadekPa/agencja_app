import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyScalarWhereInputObjectSchema as ArApplyScalarWhereInputObjectSchema } from './ArApplyScalarWhereInput.schema';
import { ArApplyUpdateManyMutationInputObjectSchema as ArApplyUpdateManyMutationInputObjectSchema } from './ArApplyUpdateManyMutationInput.schema';
import { ArApplyUncheckedUpdateManyWithoutArTransactionInputObjectSchema as ArApplyUncheckedUpdateManyWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedUpdateManyWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArApplyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ArApplyUpdateManyMutationInputObjectSchema), z.lazy(() => ArApplyUncheckedUpdateManyWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArApplyUpdateManyWithWhereWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArApplyUpdateManyWithWhereWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyUpdateManyWithWhereWithoutArTransactionInput>;
export const ArApplyUpdateManyWithWhereWithoutArTransactionInputObjectZodSchema = makeSchema();
