import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsCreateWithoutTblAgreementsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectSchema as tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblAgrEventsCreateManyTblAgreementsInputEnvelope.schema';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema as tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInput.schema';
import { tblAgrEventsScalarWhereInputObjectSchema as tblAgrEventsScalarWhereInputObjectSchema } from './tblAgrEventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrEventsCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema), z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInput>;
export const tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
