import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './dictDistributionTypeWhereInput.schema';
import { dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictDistributionTypeWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInput>;
export const dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
