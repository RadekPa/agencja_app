import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUpdateWithoutTblAgrEventsInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAgrEventsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblAgrEventsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAgrEventsInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInput>;
export const tblAgreementsUpdateToOneWithWhereWithoutTblAgrEventsInputObjectZodSchema = makeSchema();
