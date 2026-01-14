import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dictArticles: z.lazy(() => dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutTblAgreementsInput>;
export const dictLanguagesUncheckedUpdateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
