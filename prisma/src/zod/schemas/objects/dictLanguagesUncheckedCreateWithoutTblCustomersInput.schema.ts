import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string(),
  LangDesc: z.string(),
  LangPL: z.string(),
  dictArticles: z.lazy(() => dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutTblCustomersInput>;
export const dictLanguagesUncheckedCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
