import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateWithoutDictCopyTypeInput.schema';
import { tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutDictCopyTypeInput.schema';
import { tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema as tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutDictCopyTypeInput.schema';
import { tblSubmissionsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUpsertWithWhereUniqueWithoutDictCopyTypeInput.schema';
import { tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectSchema as tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyDictCopyTypeInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInput.schema';
import { tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema as tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema } from './tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInput.schema';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutDictCopyTypeInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyDictCopyTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema), z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutDictCopyTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema), z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInput>;
export const tblSubmissionsUncheckedUpdateManyWithoutDictCopyTypeNestedInputObjectZodSchema = makeSchema();
