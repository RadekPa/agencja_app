import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesUpdateWithoutTblAgreementsInputObjectSchema as tblTitlesUpdateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUpdateWithoutTblAgreementsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblTitlesCreateWithoutTblAgreementsInputObjectSchema as tblTitlesCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesCreateWithoutTblAgreementsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]),
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional()
}).strict();
export const tblTitlesUpsertWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithoutTblAgreementsInput>;
export const tblTitlesUpsertWithoutTblAgreementsInputObjectZodSchema = makeSchema();
