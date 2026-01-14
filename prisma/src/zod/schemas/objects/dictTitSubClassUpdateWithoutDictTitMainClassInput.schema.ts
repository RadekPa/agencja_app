import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblMailingListsUpdateManyWithoutDictTitSubClassNestedInput.schema';
import { tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema as tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema } from './tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInput.schema'

const makeSchema = () => z.object({
  SubClassCode: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  SubClassDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblMailingLists: z.lazy(() => tblMailingListsUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassUpdateManyWithoutDictTitSubClassNestedInputObjectSchema).optional()
}).strict();
export const dictTitSubClassUpdateWithoutDictTitMainClassInputObjectSchema: z.ZodType<Prisma.dictTitSubClassUpdateWithoutDictTitMainClassInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassUpdateWithoutDictTitMainClassInput>;
export const dictTitSubClassUpdateWithoutDictTitMainClassInputObjectZodSchema = makeSchema();
