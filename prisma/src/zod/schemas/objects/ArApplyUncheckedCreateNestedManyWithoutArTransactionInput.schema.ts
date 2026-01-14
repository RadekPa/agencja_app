import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyCreateWithoutArTransactionInputObjectSchema as ArApplyCreateWithoutArTransactionInputObjectSchema } from './ArApplyCreateWithoutArTransactionInput.schema';
import { ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema as ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedCreateWithoutArTransactionInput.schema';
import { ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema as ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema } from './ArApplyCreateOrConnectWithoutArTransactionInput.schema';
import { ArApplyCreateManyArTransactionInputEnvelopeObjectSchema as ArApplyCreateManyArTransactionInputEnvelopeObjectSchema } from './ArApplyCreateManyArTransactionInputEnvelope.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './ArApplyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArApplyCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyCreateWithoutArTransactionInputObjectSchema).array(), z.lazy(() => ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ArApplyCreateManyArTransactionInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ArApplyWhereUniqueInputObjectSchema), z.lazy(() => ArApplyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectSchema: z.ZodType<Prisma.ArApplyUncheckedCreateNestedManyWithoutArTransactionInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyUncheckedCreateNestedManyWithoutArTransactionInput>;
export const ArApplyUncheckedCreateNestedManyWithoutArTransactionInputObjectZodSchema = makeSchema();
