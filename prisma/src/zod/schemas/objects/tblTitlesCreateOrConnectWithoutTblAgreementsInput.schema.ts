import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesCreateWithoutTblAgreementsInputObjectSchema as tblTitlesCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesCreateWithoutTblAgreementsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateOrConnectWithoutTblAgreementsInput>;
export const tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
