import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional()
}).strict();
export const dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUncheckedUpdateWithoutDictArticlesInput>;
export const dictLanguagesUncheckedUpdateWithoutDictArticlesInputObjectZodSchema = makeSchema();
