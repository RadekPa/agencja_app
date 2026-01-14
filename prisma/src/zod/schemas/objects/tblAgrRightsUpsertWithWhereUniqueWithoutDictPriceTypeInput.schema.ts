import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsCreateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedCreateWithoutDictPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgrRightsCreateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedCreateWithoutDictPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInput>;
export const tblAgrRightsUpsertWithWhereUniqueWithoutDictPriceTypeInputObjectZodSchema = makeSchema();
