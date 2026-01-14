import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInput>;
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictRoyPriceTypeInputObjectZodSchema = makeSchema();
