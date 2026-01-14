import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesUpdateWithoutTblAgreementsInputObjectSchema as tblTitlesUpdateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUpdateWithoutTblAgreementsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInput>;
export const tblTitlesUpdateToOneWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
