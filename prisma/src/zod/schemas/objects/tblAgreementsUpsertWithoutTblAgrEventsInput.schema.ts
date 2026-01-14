import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUpdateWithoutTblAgrEventsInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAgrEventsInput.schema';
import { tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrEventsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrEventsInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrEventsInputObjectSchema)]),
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const tblAgreementsUpsertWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithoutTblAgrEventsInput>;
export const tblAgreementsUpsertWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
