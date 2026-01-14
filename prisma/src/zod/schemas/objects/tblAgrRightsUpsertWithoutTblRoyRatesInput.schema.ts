import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUpdateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsCreateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)]),
  where: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUpsertWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithoutTblRoyRatesInput>;
export const tblAgrRightsUpsertWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
