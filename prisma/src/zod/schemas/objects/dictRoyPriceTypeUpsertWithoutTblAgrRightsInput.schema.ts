import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './dictRoyPriceTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]),
  where: z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUpsertWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUpsertWithoutTblAgrRightsInput>;
export const dictRoyPriceTypeUpsertWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
