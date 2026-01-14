import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema';
import { tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUpdateWithoutTblRoyRatesInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInput>;
export const tblAgrRightsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
