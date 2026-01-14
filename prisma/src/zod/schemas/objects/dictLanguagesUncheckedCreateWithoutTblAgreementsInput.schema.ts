import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string(),
  LangDesc: z.string(),
  LangPL: z.string(),
  dictArticles: z.lazy(() => dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutTblAgreementsInput>;
export const dictLanguagesUncheckedCreateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
