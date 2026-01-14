import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictLanguagesWhereInputObjectSchema as dictLanguagesWhereInputObjectSchema } from './dictLanguagesWhereInput.schema';
import { dictLanguagesUpdateWithoutTblTitlesInputObjectSchema as dictLanguagesUpdateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUpdateWithoutTblTitlesInput.schema';
import { dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema as dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './dictLanguagesUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => dictLanguagesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => dictLanguagesUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInput>;
export const dictLanguagesUpdateToOneWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
