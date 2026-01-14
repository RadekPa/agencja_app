import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dictArticles: z.lazy(() => dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutTblTitlesInput>;
export const dictLanguagesUncheckedUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
