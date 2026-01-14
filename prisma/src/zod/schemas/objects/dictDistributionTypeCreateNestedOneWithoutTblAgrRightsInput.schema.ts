import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './dictDistributionTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  connect: z.lazy(() => dictDistributionTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInput>;
export const dictDistributionTypeCreateNestedOneWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
