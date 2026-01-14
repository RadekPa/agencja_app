import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrRightsWhereUniqueInputObjectSchema as tblAgrRightsWhereUniqueInputObjectSchema } from './tblAgrRightsWhereUniqueInput.schema';
import { tblAgrRightsUpdateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUpdateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUpdateWithoutDictPriceTypeInput.schema';
import { tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInputObjectSchema as tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInputObjectSchema } from './tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrRightsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrRightsUpdateWithoutDictPriceTypeInputObjectSchema), z.lazy(() => tblAgrRightsUncheckedUpdateWithoutDictPriceTypeInputObjectSchema)])
}).strict();
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInput>;
export const tblAgrRightsUpdateWithWhereUniqueWithoutDictPriceTypeInputObjectZodSchema = makeSchema();
