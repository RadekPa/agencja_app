import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SubClassDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInput>;
export const dictTitSubClassUncheckedUpdateWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
