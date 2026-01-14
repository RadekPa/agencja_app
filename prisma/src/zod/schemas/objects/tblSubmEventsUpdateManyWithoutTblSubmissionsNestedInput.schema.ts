import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUncheckedCreateWithoutTblSubmissionsInput.schema';
import { tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema as tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsCreateOrConnectWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInput.schema';
import { tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectSchema as tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectSchema } from './tblSubmEventsCreateManyTblSubmissionsInputEnvelope.schema';
import { tblSubmEventsWhereUniqueInputObjectSchema as tblSubmEventsWhereUniqueInputObjectSchema } from './tblSubmEventsWhereUniqueInput.schema';
import { tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInput.schema';
import { tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInputObjectSchema as tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInputObjectSchema } from './tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInput.schema';
import { tblSubmEventsScalarWhereInputObjectSchema as tblSubmEventsScalarWhereInputObjectSchema } from './tblSubmEventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsCreateWithoutTblSubmissionsInputObjectSchema).array(), z.lazy(() => tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUncheckedCreateWithoutTblSubmissionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsCreateOrConnectWithoutTblSubmissionsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUpsertWithWhereUniqueWithoutTblSubmissionsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmEventsCreateManyTblSubmissionsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmEventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUpdateWithWhereUniqueWithoutTblSubmissionsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblSubmEventsUpdateManyWithWhereWithoutTblSubmissionsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema), z.lazy(() => tblSubmEventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInput>;
export const tblSubmEventsUpdateManyWithoutTblSubmissionsNestedInputObjectZodSchema = makeSchema();
