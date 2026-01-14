import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUpsertWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './dictRoyPriceTypeWhereInput.schema';
import { dictRoyPriceTypeWhereUniqueInputObjectSchema as dictRoyPriceTypeWhereUniqueInputObjectSchema } from './dictRoyPriceTypeWhereUniqueInput.schema';
import { dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictRoyPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictRoyPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictRoyPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictRoyPriceTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictRoyPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]).optional()
}).strict();
export const dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInput>;
export const dictRoyPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
