import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema as dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema } from './dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInput.schema';
import { tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictTitMainClass: z.lazy(() => dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUpdateWithoutTblMailingListsInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateWithoutTblMailingListsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateWithoutTblMailingListsInput>;
export const dictTitSubClassUpdateWithoutTblMailingListsInputObjectZodSchema = makeSchema();
