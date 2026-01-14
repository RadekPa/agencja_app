import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './dictRoyPriceTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  connect: z.lazy(() => dictRoyPriceTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInput>;
export const dictRoyPriceTypeCreateNestedOneWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
