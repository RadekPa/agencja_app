import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutTblTitlesInputObjectSchema as tblAgreementsUpdateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUpdateWithoutTblTitlesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInput>;
export const tblAgreementsUpdateWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
