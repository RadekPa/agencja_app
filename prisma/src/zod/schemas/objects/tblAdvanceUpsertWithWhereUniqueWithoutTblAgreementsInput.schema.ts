import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './tblAdvanceWhereUniqueInput.schema';
import { tblAdvanceUpdateWithoutTblAgreementsInputObjectSchema as tblAdvanceUpdateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUpdateWithoutTblAgreementsInput.schema';
import { tblAdvanceUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblAdvanceUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblAdvanceCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceCreateWithoutTblAgreementsInput.schema';
import { tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAdvanceUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAdvanceCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInput>;
export const tblAdvanceUpsertWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
