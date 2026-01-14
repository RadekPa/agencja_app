import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedUpdateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedUpdateWithoutTblMailingListsInput>;
export const dictTitMainClassUncheckedUpdateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
