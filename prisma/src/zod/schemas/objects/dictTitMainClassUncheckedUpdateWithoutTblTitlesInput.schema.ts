import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedUpdateWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedUpdateWithoutTblTitlesInput>;
export const dictTitMainClassUncheckedUpdateWithoutTblTitlesInputObjectZodSchema = makeSchema();
