import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUpdateWithoutTblAgrRightsInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInput>;
export const tblAgreementsUpdateToOneWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
