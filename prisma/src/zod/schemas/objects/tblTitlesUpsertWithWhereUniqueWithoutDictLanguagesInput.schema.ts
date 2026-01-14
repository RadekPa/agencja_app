import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithoutDictLanguagesInputObjectSchema as tblTitlesUpdateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUpdateWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutDictLanguagesInput.schema';
import { tblTitlesCreateWithoutDictLanguagesInputObjectSchema as tblTitlesCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedCreateWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblTitlesUpdateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutDictLanguagesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblTitlesCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblTitlesUncheckedCreateWithoutDictLanguagesInputObjectSchema)])
}).strict();
export const tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInput>;
export const tblTitlesUpsertWithWhereUniqueWithoutDictLanguagesInputObjectZodSchema = makeSchema();
