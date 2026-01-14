import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInput.schema';
import { tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInput>;
export const dictTitSubClassUncheckedUpdateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
