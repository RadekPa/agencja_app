import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './ArTransactionDetailWhereUniqueInput.schema';
import { ArTransactionDetailUpdateWithoutArTransactionInputObjectSchema as ArTransactionDetailUpdateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUpdateWithoutArTransactionInput.schema';
import { ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedUpdateWithoutArTransactionInput.schema';
import { ArTransactionDetailCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailCreateWithoutArTransactionInput.schema';
import { ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedCreateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ArTransactionDetailUpdateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectSchema)]),
  create: z.union([z.lazy(() => ArTransactionDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInput>;
export const ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectZodSchema = makeSchema();
