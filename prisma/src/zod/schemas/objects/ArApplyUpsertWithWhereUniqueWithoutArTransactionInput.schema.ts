import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './ArApplyWhereUniqueInput.schema';
import { ArApplyUpdateWithoutArTransactionInputObjectSchema as ArApplyUpdateWithoutArTransactionInputObjectSchema } from './ArApplyUpdateWithoutArTransactionInput.schema';
import { ArApplyUncheckedUpdateWithoutArTransactionInputObjectSchema as ArApplyUncheckedUpdateWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedUpdateWithoutArTransactionInput.schema';
import { ArApplyCreateWithoutArTransactionInputObjectSchema as ArApplyCreateWithoutArTransactionInputObjectSchema } from './ArApplyCreateWithoutArTransactionInput.schema';
import { ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema as ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedCreateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArApplyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ArApplyUpdateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUncheckedUpdateWithoutArTransactionInputObjectSchema)]),
  create: z.union([z.lazy(() => ArApplyCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArApplyUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArApplyUpsertWithWhereUniqueWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyUpsertWithWhereUniqueWithoutArTransactionInput>;
export const ArApplyUpsertWithWhereUniqueWithoutArTransactionInputObjectZodSchema = makeSchema();
