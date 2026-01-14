import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUpsertWithoutTblAgrRightsInput.schema';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './dictPriceTypeWhereInput.schema';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './dictPriceTypeWhereUniqueInput.schema';
import { dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictPriceTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictPriceTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictPriceTypeUpsertWithoutTblAgrRightsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictPriceTypeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictPriceTypeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictPriceTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictPriceTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]).optional()
}).strict();
export const dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInput>;
export const dictPriceTypeUpdateOneWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
