import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './dictPriceTypeWhereUniqueInput.schema';
import { dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictPriceTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictPriceTypeCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeCreateOrConnectWithoutTblAgrRightsInput>;
export const dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
