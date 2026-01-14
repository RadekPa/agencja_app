import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './dictRoyPriceTypeWhereUniqueInput.schema';
import { dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyPriceTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInput>;
export const dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
