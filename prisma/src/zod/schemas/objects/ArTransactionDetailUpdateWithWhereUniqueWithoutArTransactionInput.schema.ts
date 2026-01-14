import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './ArTransactionDetailWhereUniqueInput.schema';
import { ArTransactionDetailUpdateWithoutArTransactionInputObjectSchema as ArTransactionDetailUpdateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUpdateWithoutArTransactionInput.schema';
import { ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedUpdateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ArTransactionDetailUpdateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUncheckedUpdateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInput>;
export const ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectZodSchema = makeSchema();
