import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dictArticles: z.lazy(() => dictArticlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedUpdateInput>;
export const dictLanguagesUncheckedUpdateInputObjectZodSchema = makeSchema();
