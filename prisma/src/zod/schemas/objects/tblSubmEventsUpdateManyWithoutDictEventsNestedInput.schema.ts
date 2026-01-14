import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateWithoutDictEventsInputObjectSchema as tblSubmEventsCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateWithoutDictEventsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutDictEventsInput.schema';
import { tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema as tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema } from './tblSubmEventsCreateOrConnectWithoutDictEventsInput.schema';
import { tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema as tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema } from './tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInput.schema';
import { tblSubmEventsCreateManyDictEventsInputEnvelopeObjectSchema as tblSubmEventsCreateManyDictEventsInputEnvelopeObjectSchema } from './tblSubmEventsCreateManyDictEventsInputEnvelope.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema as tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema } from './tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInput.schema';
import { tblSubmEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema as tblSubmEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema } from './tblSubmEventsUpdateManyWithWhereWithoutDictEventsInput.schema';
import { tblSubmEventsScalarWhereInputObjectSchema as tblSubmEventsScalarWhereInputObjectSchema } from './tblSubmEventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsCreateWithoutDictEventsInputObjectSchema).array(), z.lazy(() => tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutDictEventsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsCreateOrConnectWithoutDictEventsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUpsertWithWhereUniqueWithoutDictEventsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmEventsCreateManyDictEventsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUpdateWithWhereUniqueWithoutDictEventsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblSubmEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema), z.lazy(() => tblSubmEventsUpdateManyWithWhereWithoutDictEventsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema), z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpdateManyWithoutDictEventsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateManyWithoutDictEventsNestedInput>;
export const tblSubmEventsUpdateManyWithoutDictEventsNestedInputObjectZodSchema = makeSchema();
