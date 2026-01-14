import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSeriesCreateWithoutTblCustomersInputObjectSchema as tblSeriesCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesCreateWithoutTblCustomersInput.schema';
import { tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema as tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblSeriesUncheckedCreateWithoutTblCustomersInput.schema';
import { tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema as tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema } from './tblSeriesCreateOrConnectWithoutTblCustomersInput.schema';
import { tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblSeriesCreateManyTblCustomersInputEnvelopeObjectSchema as tblSeriesCreateManyTblCustomersInputEnvelopeObjectSchema } from './tblSeriesCreateManyTblCustomersInputEnvelope.schema';
import { tblSeriesWhereUniqueInputObjectSchema as tblSeriesWhereUniqueInputObjectSchema } from './tblSeriesWhereUniqueInput.schema';
import { tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema as tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema } from './tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInput.schema';
import { tblSeriesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema as tblSeriesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema } from './tblSeriesUpdateManyWithWhereWithoutTblCustomersInput.schema';
import { tblSeriesScalarWhereInputObjectSchema as tblSeriesScalarWhereInputObjectSchema } from './tblSeriesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSeriesCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesCreateWithoutTblCustomersInputObjectSchema).array(), z.lazy(() => tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUncheckedCreateWithoutTblCustomersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesCreateOrConnectWithoutTblCustomersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSeriesCreateManyTblCustomersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblSeriesWhereUniqueInputObjectSchema), z.lazy(() => tblSeriesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblSeriesWhereUniqueInputObjectSchema), z.lazy(() => tblSeriesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblSeriesWhereUniqueInputObjectSchema), z.lazy(() => tblSeriesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblSeriesWhereUniqueInputObjectSchema), z.lazy(() => tblSeriesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblSeriesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema), z.lazy(() => tblSeriesUpdateManyWithWhereWithoutTblCustomersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblSeriesScalarWhereInputObjectSchema), z.lazy(() => tblSeriesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectSchema: z.ZodType<Prisma.tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInput>;
export const tblSeriesUncheckedUpdateManyWithoutTblCustomersNestedInputObjectZodSchema = makeSchema();
