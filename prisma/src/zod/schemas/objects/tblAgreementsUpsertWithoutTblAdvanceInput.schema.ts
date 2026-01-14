import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema as tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUpdateWithoutTblAdvanceInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblAdvanceInput.schema';
import { tblAgreementsCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsCreateWithoutTblAdvanceInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblAdvanceInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblAdvanceInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblAdvanceInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblAdvanceInputObjectSchema)]),
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const tblAgreementsUpsertWithoutTblAdvanceInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithoutTblAdvanceInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithoutTblAdvanceInput>;
export const tblAgreementsUpsertWithoutTblAdvanceInputObjectZodSchema = makeSchema();
