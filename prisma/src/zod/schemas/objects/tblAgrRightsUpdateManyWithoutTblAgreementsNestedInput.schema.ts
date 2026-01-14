import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsCreateWithoutTblAgreementsInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectSchema as tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyTblAgreementsInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema as tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInput.schema';
import { tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema as tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInput.schema';
import { tblAgrRightsScalarWhereInputObjectSchema as tblAgrRightsScalarWhereInputObjectSchema } from './tblAgrRightsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema), z.lazy(() => tblAgrRightsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUpdateManyWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateManyWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateManyWithoutTblAgreementsNestedInput>;
export const tblAgrRightsUpdateManyWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
