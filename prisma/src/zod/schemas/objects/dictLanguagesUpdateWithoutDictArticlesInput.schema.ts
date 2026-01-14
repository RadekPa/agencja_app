import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblAgreementsUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblAgreementsUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblAgreementsUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblCustomersUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblCustomersUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblCustomersUpdateManyWithoutDictLanguagesNestedInput.schema';
import { tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema as tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema } from './tblTitlesUpdateManyWithoutDictLanguagesNestedInput.schema'

const makeSchema = () => z.object({
  LangAbb: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  LangPL: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblCustomers: z.lazy(() => tblCustomersUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateManyWithoutDictLanguagesNestedInputObjectSchema).optional()
}).strict();
export const dictLanguagesUpdateWithoutDictArticlesInputObjectSchema: z.ZodType<Prisma.dictLanguagesUpdateWithoutDictArticlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictLanguagesUpdateWithoutDictArticlesInput>;
export const dictLanguagesUpdateWithoutDictArticlesInputObjectZodSchema = makeSchema();
