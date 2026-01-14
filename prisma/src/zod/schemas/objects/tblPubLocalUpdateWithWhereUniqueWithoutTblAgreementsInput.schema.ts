import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './tblPubLocalWhereUniqueInput.schema';
import { tblPubLocalUpdateWithoutTblAgreementsInputObjectSchema as tblPubLocalUpdateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUpdateWithoutTblAgreementsInput.schema';
import { tblPubLocalUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblPubLocalUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblPubLocalUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblPubLocalWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblPubLocalUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblPubLocalUncheckedUpdateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInput>;
export const tblPubLocalUpdateWithWhereUniqueWithoutTblAgreementsInputObjectZodSchema = makeSchema();
