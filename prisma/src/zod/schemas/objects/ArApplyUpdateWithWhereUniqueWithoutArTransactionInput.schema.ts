import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './ArApplyWhereUniqueInput.schema';
import { ArApplyUpdateWithoutArTransactionInputObjectSchema as ArApplyUpdateWithoutArTransactionInputObjectSchema } from './ArApplyUpdateWithoutArTransactionInput.schema';
import { ArApplyUncheckedUpdateWithoutArTransactionInputObjectSchema as ArApplyUncheckedUpdateWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedUpdateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArApplyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ArApplyUpdateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUncheckedUpdateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArApplyUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArApplyUpdateWithWhereUniqueWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyUpdateWithWhereUniqueWithoutArTransactionInput>;
export const ArApplyUpdateWithWhereUniqueWithoutArTransactionInputObjectZodSchema = makeSchema();
