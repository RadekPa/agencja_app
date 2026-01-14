import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './dictRoyAccountIntervalWhereInput.schema';
import { dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInput>;
export const dictRoyAccountIntervalUpdateToOneWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
