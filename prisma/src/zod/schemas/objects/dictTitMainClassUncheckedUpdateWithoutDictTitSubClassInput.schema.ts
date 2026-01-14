import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema';
import { tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUncheckedUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInput>;
export const dictTitMainClassUncheckedUpdateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
