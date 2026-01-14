import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblAgreementsCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblTitlesCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string().max(3),
  LangDesc: z.string().max(30),
  LangPL: z.string().max(30),
  tblAgreements: z.lazy(() => tblAgreementsCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesCreateWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesCreateWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesCreateWithoutDictArticlesInput>;
export const dictLanguagesCreateWithoutDictArticlesInputObjectZodSchema = makeSchema();
