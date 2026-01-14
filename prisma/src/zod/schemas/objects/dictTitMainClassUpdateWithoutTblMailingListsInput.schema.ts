import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { dictTitSubClassUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as dictTitSubClassUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './dictTitSubClassUpdateManyWithoutDictTitMainClassNestedInput.schema';
import { tblTitlesUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblTitlesUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblTitlesUpdateManyWithoutDictTitMainClassNestedInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictTitSubClass: z.lazy(() => dictTitSubClassUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUpdateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateWithoutTblMailingListsInput>;
export const dictTitMainClassUpdateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
