import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema as dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string().max(3),
  LangDesc: z.string().max(30),
  LangPL: z.string().max(30),
  dictArticles: z.lazy(() => dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateWithoutTblAgreementsInput>;
export const dictLanguagesCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
