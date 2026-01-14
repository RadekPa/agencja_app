import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUpsertWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUpsertWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUpsertWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './dictDistributionTypeWhereInput.schema';
import { dictDistributionTypeWhereUniqueInputObjectSchema as dictDistributionTypeWhereUniqueInputObjectSchema } from './dictDistributionTypeWhereUniqueInput.schema';
import { dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictDistributionTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictDistributionTypeCreateOrConnectWithoutTblAgrRightsInputObjectSchema).optional(),
  upsert: z.lazy(() => dictDistributionTypeUpsertWithoutTblAgrRightsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => dictDistributionTypeWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => dictDistributionTypeWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => dictDistributionTypeWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => dictDistributionTypeUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictDistributionTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]).optional()
}).strict();
export const dictDistributionTypeUpdateOneWithoutTblAgrRightsNestedInputObjectSchema: z.ZodType<Prisma.dictDistributionTypeUpdateOneWithoutTblAgrRightsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.dictDistributionTypeUpdateOneWithoutTblAgrRightsNestedInput>;
export const dictDistributionTypeUpdateOneWithoutTblAgrRightsNestedInputObjectZodSchema = makeSchema();
