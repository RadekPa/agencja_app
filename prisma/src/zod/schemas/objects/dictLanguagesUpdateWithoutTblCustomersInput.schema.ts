import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { dictArticlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema as dictArticlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './dictArticlesUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblAgreementsUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblAgreementsUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblAgreementsUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblTitlesUpdateManyWithoutDictLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  dictArticles: z.lazy(() => dictArticlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional()
}).strict();
export const dictLanguagesUpdateWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateWithoutTblCustomersInput>;
export const dictLanguagesUpdateWithoutTblCustomersInputObjectZodSchema = makeSchema();
