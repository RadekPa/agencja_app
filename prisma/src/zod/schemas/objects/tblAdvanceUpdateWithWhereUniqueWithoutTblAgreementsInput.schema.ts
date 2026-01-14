import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './tblAdvanceWhereUniqueInput.schema';
import { tblAdvanceUpdateWithoutTblAgreementsInputObjectSchema as tblAdvanceUpdateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUpdateWithoutTblAgreementsInput.schema';
import { tblAdvanceUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblAdvanceUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblAdvanceUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAdvanceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAdvanceUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAdvanceUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInput>;
export const tblAdvanceUpdateWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
