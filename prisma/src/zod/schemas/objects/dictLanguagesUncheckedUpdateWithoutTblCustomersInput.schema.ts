import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dictArticles: z.lazy(() => dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutTblCustomersInput>;
export const dictLanguagesUncheckedUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
