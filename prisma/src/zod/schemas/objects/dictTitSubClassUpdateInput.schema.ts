import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema as dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema } from './dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInput.schema';
import { tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblMailingListsUpdateManyWithoutDictTitSubClassNestedInput.schema';
import { tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictTitMainClass: z.lazy(() => dictTitMainClassUpdateOneWithoutDictTitSubClassNestedInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUpdateInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateInput>;
export const dictTitSubClassUpdateInputObjectZodSchema = makeSchema();
