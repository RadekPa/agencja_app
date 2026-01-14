import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './dictRoyTypeWhereUniqueInput.schema';
import { dictRoyTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeCreateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedCreateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => dictRoyTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInput>;
export const dictRoyTypeUpsertWithWhereUniqueWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
