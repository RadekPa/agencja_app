import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './dictPriceTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]),
  where: z.lazy(() => dictPriceTypeWhereInputObjectSchema).optional()
}).strict();
export const dictPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUpsertWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUpsertWithoutTblAgrRightsInput>;
export const dictPriceTypeUpsertWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
