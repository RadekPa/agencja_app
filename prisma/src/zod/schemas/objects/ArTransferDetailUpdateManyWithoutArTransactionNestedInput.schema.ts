import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransferDetailCreateWithoutArTransactionInputObjectSchema as ArTransferDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailCreateWithoutArTransactionInput.schema';
import { ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransferDetailUncheckedCreateWithoutArTransactionInput.schema';
import { ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema as ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema } from './ArTransferDetailCreateOrConnectWithoutArTransactionInput.schema';
import { ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema as ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema } from './ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInput.schema';
import { ArTransferDetailCreateManyArTransactionInputEnvelopeObjectSchema as ArTransferDetailCreateManyArTransactionInputEnvelopeObjectSchema } from './ArTransferDetailCreateManyArTransactionInputEnvelope.schema';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './ArTransferDetailWhereUniqueInput.schema';
import { ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema as ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema } from './ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInput.schema';
import { ArTransferDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema as ArTransferDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema } from './ArTransferDetailUpdateManyWithWhereWithoutArTransactionInput.schema';
import { ArTransferDetailScalarWhereInputObjectSchema as ArTransferDetailScalarWhereInputObjectSchema } from './ArTransferDetailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransferDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailCreateWithoutArTransactionInputObjectSchema).array(), z.lazy(() => ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUncheckedCreateWithoutArTransactionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailCreateOrConnectWithoutArTransactionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ArTransferDetailCreateManyArTransactionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransferDetailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ArTransferDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransferDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema), z.lazy(() => ArTransferDetailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ArTransferDetailUpdateManyWithoutArTransactionNestedInputObjectSchema: z.ZodType<Prisma.ArTransferDetailUpdateManyWithoutArTransactionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransferDetailUpdateManyWithoutArTransactionNestedInput>;
export const ArTransferDetailUpdateManyWithoutArTransactionNestedInputObjectZodSchema = makeSchema();
