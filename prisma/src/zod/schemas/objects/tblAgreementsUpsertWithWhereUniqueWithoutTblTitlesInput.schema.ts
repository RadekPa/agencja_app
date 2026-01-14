import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutTblTitlesInputObjectSchema as tblAgreementsUpdateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUpdateWithoutTblTitlesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblTitlesInput.schema';
import { tblAgreementsCreateWithoutTblTitlesInputObjectSchema as tblAgreementsCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsCreateWithoutTblTitlesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInput>;
export const tblAgreementsUpsertWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
