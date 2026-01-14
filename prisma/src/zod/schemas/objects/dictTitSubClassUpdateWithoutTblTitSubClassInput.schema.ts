import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema as dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema } from './dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInput.schema';
import { tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblMailingListsUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictTitMainClass: z.lazy(() => dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUpdateWithoutTblTitSubClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateWithoutTblTitSubClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateWithoutTblTitSubClassInput>;
export const dictTitSubClassUpdateWithoutTblTitSubClassInputObjectZodSchema = makeSchema();
