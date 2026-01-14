import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUpdateWithoutTblAgreementsInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInput>;
export const tblAgrRightsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
