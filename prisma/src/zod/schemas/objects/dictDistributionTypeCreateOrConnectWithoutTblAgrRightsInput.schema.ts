import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './dictDistributionTypeWhereUniqueInput.schema';
import { dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictDistributionTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInput>;
export const dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
