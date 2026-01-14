import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutDictAgrEventsInput.schema';
import { tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema as tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsCreateOrConnectWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInput.schema';
import { tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectSchema as tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectSchema } from './tblAgrEventsCreateManyDictAgrEventsInputEnvelope.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInput.schema';
import { tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInputObjectSchema as tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInputObjectSchema } from './tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInput.schema';
import { tblAgrEventsScalarWhereInputObjectSchema as tblAgrEventsScalarWhereInputObjectSchema } from './tblAgrEventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsCreateWithoutDictAgrEventsInputObjectSchema).array(), z.lazy(() => tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutDictAgrEventsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsCreateOrConnectWithoutDictAgrEventsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUpsertWithWhereUniqueWithoutDictAgrEventsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrEventsCreateManyDictAgrEventsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUpdateWithWhereUniqueWithoutDictAgrEventsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInputObjectSchema), z.lazy(() => tblAgrEventsUpdateManyWithWhereWithoutDictAgrEventsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema), z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInput>;
export const tblAgrEventsUncheckedUpdateManyWithoutDictAgrEventsNestedInputObjectZodSchema = makeSchema();
