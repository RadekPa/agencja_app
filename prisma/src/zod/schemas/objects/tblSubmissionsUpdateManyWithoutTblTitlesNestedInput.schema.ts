import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsCreateWithoutTblTitlesInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblTitlesInput.schema';
import { tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema as tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema } from './tblSubmissionsCreateOrConnectWithoutTblTitlesInput.schema';
import { tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectSchema as tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectSchema } from './tblSubmissionsCreateManyTblTitlesInputEnvelope.schema';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema as tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInput.schema';
import { tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema as tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInput.schema';
import { tblSubmissionsScalarWhereInputObjectSchema as tblSubmissionsScalarWhereInputObjectSchema } from './tblSubmissionsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsCreateWithoutTblTitlesInputObjectSchema).array(), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsCreateOrConnectWithoutTblTitlesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblSubmissionsCreateManyTblTitlesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema), z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema), z.lazy(() => tblSubmissionsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblSubmissionsUpdateManyWithoutTblTitlesNestedInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateManyWithoutTblTitlesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateManyWithoutTblTitlesNestedInput>;
export const tblSubmissionsUpdateManyWithoutTblTitlesNestedInputObjectZodSchema = makeSchema();
