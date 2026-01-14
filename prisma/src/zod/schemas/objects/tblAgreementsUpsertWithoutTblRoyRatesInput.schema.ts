import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUpdateWithoutTblRoyRatesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblRoyRatesInput.schema';
import { tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyRatesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyRatesInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)]),
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional()
}).strict();
export const tblAgreementsUpsertWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithoutTblRoyRatesInput>;
export const tblAgreementsUpsertWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
