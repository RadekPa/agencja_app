import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ArTransactionDetailCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailCreateWithoutArTransactionInput.schema';
import { ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema as ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUncheckedCreateWithoutArTransactionInput.schema';
import { ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema as ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema } from './ArTransactionDetailCreateOrConnectWithoutArTransactionInput.schema';
import { ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema as ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInput.schema';
import { ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectSchema as ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectSchema } from './ArTransactionDetailCreateManyArTransactionInputEnvelope.schema';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './ArTransactionDetailWhereUniqueInput.schema';
import { ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema as ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInput.schema';
import { ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema as ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema } from './ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInput.schema';
import { ArTransactionDetailScalarWhereInputObjectSchema as ArTransactionDetailScalarWhereInputObjectSchema } from './ArTransactionDetailScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ArTransactionDetailCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailCreateWithoutArTransactionInputObjectSchema).array(), z.lazy(() => ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUncheckedCreateWithoutArTransactionInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailCreateOrConnectWithoutArTransactionInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUpsertWithWhereUniqueWithoutArTransactionInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ArTransactionDetailCreateManyArTransactionInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema), z.lazy(() => ArTransactionDetailWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUpdateWithWhereUniqueWithoutArTransactionInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema), z.lazy(() => ArTransactionDetailUpdateManyWithWhereWithoutArTransactionInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ArTransactionDetailScalarWhereInputObjectSchema), z.lazy(() => ArTransactionDetailScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ArTransactionDetailUpdateManyWithoutArTransactionNestedInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailUpdateManyWithoutArTransactionNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailUpdateManyWithoutArTransactionNestedInput>;
export const ArTransactionDetailUpdateManyWithoutArTransactionNestedInputObjectZodSchema = makeSchema();
