import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormNestedInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormNestedInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormNestedInput.schema'

const makeSchema = () => z.object({
  RightFormID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  RightFormDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  RightFormPL: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RightFormAbbPL: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RightFormAbbEN: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictRightsFormNestedInputObjectSchema).optional()
}).strict();
export const dictRightsFormUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictRightsFormUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormUncheckedUpdateInput>;
export const dictRightsFormUncheckedUpdateInputObjectZodSchema = makeSchema();
