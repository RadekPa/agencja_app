import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema as dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './dictArticlesCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string().max(3),
  LangDesc: z.string().max(30),
  LangPL: z.string().max(30),
  dictArticles: z.lazy(() => dictArticlesCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateWithoutTblTitlesInput>;
export const dictLanguagesCreateWithoutTblTitlesInputObjectZodSchema = makeSchema();
