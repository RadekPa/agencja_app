import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUpdateWithoutTblAgrRightsInput.schema';
import { dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUncheckedUpdateWithoutTblAgrRightsInput.schema';
import { dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormCreateWithoutTblAgrRightsInput.schema';
import { dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUncheckedCreateWithoutTblAgrRightsInput.schema';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './dictRightsFormWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)]),
  create: z.union([z.lazy(() => dictRightsFormCreateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUncheckedCreateWithoutTblAgrRightsInputObjectSchema)]),
  where: z.lazy(() => dictRightsFormWhereInputObjectSchema).optional()
}).strict();
export const dictRightsFormUpsertWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRightsFormUpsertWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormUpsertWithoutTblAgrRightsInput>;
export const dictRightsFormUpsertWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
