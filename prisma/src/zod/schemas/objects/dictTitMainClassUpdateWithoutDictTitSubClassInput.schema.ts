import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblMailingListsUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblMailingListsUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblMailingListsUpdateManyWithoutDictTitMainClassNestedInput.schema';
import { tblTitlesUpdateManyWithoutDictTitMainClassNestedInputObjectSchema as tblTitlesUpdateManyWithoutDictTitMainClassNestedInputObjectSchema } from './tblTitlesUpdateManyWithoutDictTitMainClassNestedInput.schema'

const makeSchema = () => z.object({
  ClassCode: z.union([z.string().max(10), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesUpdateManyWithoutDictTitMainClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitMainClassUpdateWithoutDictTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitMainClassUpdateWithoutDictTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassUpdateWithoutDictTitSubClassInput>;
export const dictTitMainClassUpdateWithoutDictTitSubClassInputObjectZodSchema = makeSchema();
