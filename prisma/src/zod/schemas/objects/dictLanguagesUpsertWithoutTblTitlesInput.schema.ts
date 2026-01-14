import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesUpdateWithoutTblTitlesInputObjectSchema as dictLanguagesUpdateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUpdateWithoutTblTitlesInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblTitlesInput.schema';
import { dictLanguagesCreateWithoutTblTitlesInputObjectSchema as dictLanguagesCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesCreateWithoutTblTitlesInput.schema';
import { dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema as dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUncheckedCreateWithoutTblTitlesInput.schema';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => dictLanguagesUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => dictLanguagesCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema)]),
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional()
}).strict();
export const dictLanguagesUpsertWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpsertWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpsertWithoutTblTitlesInput>;
export const dictLanguagesUpsertWithoutTblTitlesInputObjectZodSchema = makeSchema();
