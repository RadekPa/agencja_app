import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUpdateWithoutTblAgrRightsInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsCreateWithoutTblAgrRightsInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAgrRightsInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]),
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const tblAgreementsUpsertWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithoutTblAgrRightsInput>;
export const tblAgreementsUpsertWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
