import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictRoyPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictRoyPriceTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictRoyPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictRoyPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInput>;
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictRoyPriceTypeInputObjectZodSchema = makeSchema();
