import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInput.schema';
import { tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassCode: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SubClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedUpdateInput>;
export const dictTitSubClassUncheckedUpdateInputObjectZodSchema = makeSchema();
