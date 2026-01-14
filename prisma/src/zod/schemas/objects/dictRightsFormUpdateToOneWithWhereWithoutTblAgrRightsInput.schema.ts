import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './dictRightsFormWhereInput.schema';
import { dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUpdateWithoutTblAgrRightsInput.schema';
import { dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema as dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema } from './dictRightsFormUncheckedUpdateWithoutTblAgrRightsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictRightsFormWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictRightsFormUpdateWithoutTblAgrRightsInputObjectSchema), z.lazy(() => dictRightsFormUncheckedUpdateWithoutTblAgrRightsInputObjectSchema)])
}).strict();
export const dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInput>;
export const dictRightsFormUpdateToOneWithWhereWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
