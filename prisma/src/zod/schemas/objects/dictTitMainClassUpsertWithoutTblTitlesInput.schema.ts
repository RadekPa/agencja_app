import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema as dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUpdateWithoutTblTitlesInput.schema';
import { dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUncheckedUpdateWithoutTblTitlesInput.schema';
import { dictTitMainClassCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassCreateWithoutTblTitlesInput.schema';
import { dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema as dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictTitMainClassUncheckedCreateWithoutTblTitlesInput.schema';
import { dictTitMainClassWhereInputObjectSchema as dictTitMainClassWhereInputObjectSchema } from './dictTitMainClassWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictTitMainClassUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => dictTitMainClassCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictTitMainClassUncheckedCreateWithoutTblTitlesInputObjectSchema)]),
  where: z.lazy(() => dictTitMainClassWhereInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUpsertWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpsertWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpsertWithoutTblTitlesInput>;
export const dictTitMainClassUpsertWithoutTblTitlesInputObjectZodSchema = makeSchema();
