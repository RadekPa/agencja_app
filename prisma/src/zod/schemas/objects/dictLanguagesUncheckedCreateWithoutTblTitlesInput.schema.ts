import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string(),
  LangDesc: z.string(),
  LangPL: z.string(),
  dictArticles: z.lazy(() => dictArticlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutTblTitlesInput>;
export const dictLanguagesUncheckedCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
