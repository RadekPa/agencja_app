import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './dictPriceTypeWhereInput.schema';
import { dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictPriceTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInput>;
export const dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
