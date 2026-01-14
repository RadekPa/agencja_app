import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  ClassCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  SubClassDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUncheckedUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUncheckedUpdateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUncheckedUpdateWithoutTblMailingListsInput>;
export const dictTitSubClassUncheckedUpdateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
