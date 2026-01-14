import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUpdateWithoutTblAgreementsInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsCreateWithoutTblAgreementsInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInput>;
export const tblAgrRightsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
