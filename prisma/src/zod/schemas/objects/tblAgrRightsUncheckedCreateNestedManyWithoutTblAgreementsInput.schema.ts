import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsCreateWithoutTblAgreementsInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectSchema as tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectSchema } from './tblAgrRightsCreateManyTblAgreementsInputEnvelope.schema';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema).array(), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblAgrRightsCreateManyTblAgreementsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema), z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblAgrRightsUncheckedCreateNestedManyWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedCreateNestedManyWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedCreateNestedManyWithoutTblAgreementsInput>;
export const tblAgrRightsUncheckedCreateNestedManyWithoutTblAgreementsInputObjectZodSchema = makeSchema();
