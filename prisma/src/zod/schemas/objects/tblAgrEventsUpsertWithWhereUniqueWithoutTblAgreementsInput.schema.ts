import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsUpdateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUpdateWithoutTblAgreementsInput.schema';
import { tblAgrEventsUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsCreateWithoutTblAgreementsInput.schema';
import { tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrEventsUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrEventsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInput>;
export const tblAgrEventsUpsertWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
