import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalCreateWithoutTblAgreementsInput.schema';
import { tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblPubLocalCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectSchema as tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblPubLocalCreateManyTblAgreementsInputEnvelope.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './tblPubLocalWhereUniqueInput.schema';
import { tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema as tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInput.schema';
import { tblPubLocalScalarWhereInputObjectSchema as tblPubLocalScalarWhereInputObjectSchema } from './tblPubLocalScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblPubLocalCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblPubLocalCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema), z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema), z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema), z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema), z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblPubLocalScalarWhereInputObjectSchema), z.lazy(() => tblPubLocalScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInput>;
export const tblPubLocalUncheckedUpdateManyWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
