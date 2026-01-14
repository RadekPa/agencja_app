import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesCreateWithoutTblAgreementsInputObjectSchema as tblTitlesCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesCreateWithoutTblAgreementsInput.schema';
import { tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblTitlesUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblTitlesCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblTitlesCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblTitlesCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblTitlesCreateNestedOneWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesCreateNestedOneWithoutTblAgreementsInput>;
export const tblTitlesCreateNestedOneWithoutTblAgreementsInputObjectZodSchema = makeSchema();
