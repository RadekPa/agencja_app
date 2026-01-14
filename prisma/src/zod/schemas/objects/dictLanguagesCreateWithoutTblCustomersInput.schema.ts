import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema as dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string().max(3),
  LangDesc: z.string().max(30),
  LangPL: z.string().max(30),
  dictArticles: z.lazy(() => dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateWithoutTblCustomersInput>;
export const dictLanguagesCreateWithoutTblCustomersInputObjectZodSchema = makeSchema();
