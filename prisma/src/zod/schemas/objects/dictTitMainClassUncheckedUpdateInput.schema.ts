import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedUpdateInput>;
export const dictTitMainClassUncheckedUpdateInputObjectZodSchema = makeSchema();
