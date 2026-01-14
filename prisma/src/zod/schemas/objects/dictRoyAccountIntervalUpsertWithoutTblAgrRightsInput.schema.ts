import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalCreateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './dictRoyAccountIntervalWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictRoyAccountIntervalUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictRoyAccountIntervalCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRoyAccountIntervalUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]),
  where: z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema).optional()
}).strict();
export const dictRoyAccountIntervalUpsertWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyAccountIntervalUpsertWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUpsertWithoutTblAgrRightsInput>;
export const dictRoyAccountIntervalUpsertWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
