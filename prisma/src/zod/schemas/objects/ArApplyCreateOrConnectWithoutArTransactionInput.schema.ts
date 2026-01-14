import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './ArApplyWhereUniqueInput.schema';
import { ArApplyCreateWithoutArTransactionInputObjectSchema as ArApplyCreateWithoutArTransactionInputObjectSchema } from './ArApplyCreateWithoutArTransactionInput.schema';
import { ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema as ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedCreateWithoutArTransactionInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ArApplyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ArApplyCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema)])
}).strict();
export const ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArApplyCreateOrConnectWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyCreateOrConnectWithoutArTransactionInput>;
export const ArApplyCreateOrConnectWithoutArTransactionInputObjectZodSchema = makeSchema();
