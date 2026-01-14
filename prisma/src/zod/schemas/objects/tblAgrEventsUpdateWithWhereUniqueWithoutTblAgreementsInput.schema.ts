import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsWhereUniqueInputObjectSchema as tblAgrEventsWhereUniqueInputObjectSchema } from './tblAgrEventsWhereUniqueInput.schema';
import { tblAgrEventsUpdateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUpdateWithoutTblAgreementsInput.schema';
import { tblAgrEventsUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblAgrEventsUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrEventsUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInput>;
export const tblAgrEventsUpdateWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
