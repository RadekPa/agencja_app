import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './dictPriceTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  connect: z.lazy(() => dictPriceTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictPriceTypeCreateNestedOneWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeCreateNestedOneWithoutTblAgrRightsInput>;
export const dictPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
