import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './dictDistributionTypeWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]),
  where: z.lazy(() => dictDistributionTypeWhereInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeUpsertWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUpsertWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUpsertWithoutTblAgrRightsInput>;
export const dictDistributionTypeUpsertWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
