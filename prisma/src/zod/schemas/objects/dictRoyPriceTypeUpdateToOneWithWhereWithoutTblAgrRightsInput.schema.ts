import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './dictRoyPriceTypeWhereInput.schema';
import { dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInput>;
export const dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
