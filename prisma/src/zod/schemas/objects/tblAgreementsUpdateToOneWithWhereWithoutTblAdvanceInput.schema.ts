import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema as tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUpdateWithoutTblAdvanceInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAdvanceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInput>;
export const tblAgreementsUpdateToOneWithWhereWithoutTblAdvanceInputObjectZodSchema = makeSchema();
