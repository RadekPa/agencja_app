import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithoutDictLanguagesInputObjectSchema as tblTitlesUpdateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUpdateWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInput>;
export const tblTitlesUpdateWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
