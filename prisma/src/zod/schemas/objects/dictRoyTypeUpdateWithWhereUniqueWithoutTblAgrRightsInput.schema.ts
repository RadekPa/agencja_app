import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './dictRoyTypeWhereUniqueInput.schema';
import { dictRoyTypeUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyTypeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => dictRoyTypeUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInput>;
export const dictRoyTypeUpdateWithWhereUniqueWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
