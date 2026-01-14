import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema';
import { dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema as dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUpdateWithoutTblTitlesInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInput>;
export const dictTitMainClassUpdateToOneWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
