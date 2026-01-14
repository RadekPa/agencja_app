import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './tblPubLocalWhereUniqueInput.schema';
import { tblPubLocalUpdateWithoutTblAgreementsInputObjectSchema as tblPubLocalUpdateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUpdateWithoutTblAgreementsInput.schema';
import { tblPubLocalUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblPubLocalUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblPubLocalCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalCreateWithoutTblAgreementsInput.schema';
import { tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblPubLocalUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblPubLocalCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInput>;
export const tblPubLocalUpsertWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
