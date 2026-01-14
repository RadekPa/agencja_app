import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsCreateWithoutTblAgreementsInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsCreateOrConnectWithoutTblAgreementsInput>;
export const tblAgrRightsCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
