import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArApplyCreateWithoutArTransactionInputObjectSchema as ArApplyCreateWithoutArTransactionInputObjectSchema } from './ArApplyCreateWithoutArTransactionInput.schema';
import { ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema as ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArApplyUncheckedCreateWithoutArTransactionInput.schema';
import { ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema as ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema } from './ArApplyCreateOrConnectWithoutArTransactionInput.schema';
import { ArApplyUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema as ArApplyUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema } from './ArApplyUpsertWithWhereUniqueWithoutArTransactionInput.schema';
import { ArApplyCreateManyArTransactionInputEnvelopeObjectSchema as ArApplyCreateManyArTransactionInputEnvelopeObjectSchema } from './ArApplyCreateManyArTransactionInputEnvelope.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './ArApplyWhereUniqueInput.schema';
import { ArApplyUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema as ArApplyUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema } from './ArApplyUpdateWithWhereUniqueWithoutArTransactionInput.schema';
import { ArApplyUpdateManyWithWhereWithoutArTransactionInputObjectSchema as ArApplyUpdateManyWithWhereWithoutArTransactionInputObjectSchema } from './ArApplyUpdateManyWithWhereWithoutArTransactionInput.schema';
import { ArApplyScalarWhereInputObjectSchema as ArApplyScalarWhereInputObjectSchema } from './ArApplyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArApplyCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyCreateWithoutArTransactionInputObjectSchema).array(), z.lazy(() => ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUncheckedCreateWithoutArTransactionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyCreateOrConnectWithoutArTransactionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ArApplyUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ArApplyCreateManyArTransactionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ArApplyWhereUniqueInputObjectSchema), z.lazy(() => ArApplyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ArApplyWhereUniqueInputObjectSchema), z.lazy(() => ArApplyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ArApplyWhereUniqueInputObjectSchema), z.lazy(() => ArApplyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ArApplyWhereUniqueInputObjectSchema), z.lazy(() => ArApplyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ArApplyUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ArApplyUpdateManyWithWhereWithoutArTransactionInputObjectSchema), z.lazy(() => ArApplyUpdateManyWithWhereWithoutArTransactionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ArApplyScalarWhereInputObjectSchema), z.lazy(() => ArApplyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ArApplyUncheckedUpdateManyWithoutArTransactionNestedInputObjectSchema: z.ZodType<Prisma.ArApplyUncheckedUpdateManyWithoutArTransactionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyUncheckedUpdateManyWithoutArTransactionNestedInput>;
export const ArApplyUncheckedUpdateManyWithoutArTransactionNestedInputObjectZodSchema = makeSchema();
