import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceCreateWithoutTblAgreementsInput.schema';
import { tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblAdvanceCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectSchema as tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblAdvanceCreateManyTblAgreementsInputEnvelope.schema';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './tblAdvanceWhereUniqueInput.schema';
import { tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema as tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInput.schema';
import { tblAdvanceScalarWhereInputObjectSchema as tblAdvanceScalarWhereInputObjectSchema } from './tblAdvanceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAdvanceCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAdvanceCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema), z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema), z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema), z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema), z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAdvanceScalarWhereInputObjectSchema), z.lazy(() => tblAdvanceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInput>;
export const tblAdvanceUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
