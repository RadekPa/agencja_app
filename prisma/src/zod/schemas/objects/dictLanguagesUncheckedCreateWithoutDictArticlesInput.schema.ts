import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInput.schema';
import { tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema as tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema } from './tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.string(),
  LangDesc: z.string(),
  LangPL: z.string(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedCreateNestedManyWithoutDictLanguagesInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedCreateWithoutDictArticlesInput>;
export const dictLanguagesUncheckedCreateWithoutDictArticlesInputObjectZodSchema = makeSchema();
