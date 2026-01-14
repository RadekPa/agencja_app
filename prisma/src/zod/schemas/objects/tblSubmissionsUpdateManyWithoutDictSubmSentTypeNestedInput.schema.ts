import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectSchema as tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyDictSubmSentTypeInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInputObjectSchema as tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInputObjectSchema } from './tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInput.schema';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutDictSubmSentTypeInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictSubmSentTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictSubmSentTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyDictSubmSentTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutDictSubmSentTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInputObjectSchema), z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutDictSubmSentTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema), z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInput>;
export const tblSubmissionsUpdateManyWithoutDictSubmSentTypeNestedInputObjectZodSchema = makeSchema();
