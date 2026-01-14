import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUpdateManyWithoutDictRightsFormNestedInputObjectSchema as tblAgrRightsUpdateManyWithoutDictRightsFormNestedInputObjectSchema } from './tblAgrRightsUpdateManyWithoutDictRightsFormNestedInput.schema'

const makeSchema = () => z.object({
  RightFormDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  RightFormPL: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RightFormAbbPL: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RightFormAbbEN: z.union([z.string().max(10), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUpdateManyWithoutDictRightsFormNestedInputObjectSchema).optional()
}).strict();
export const dictRightsFormUpdateInputObjectSchema: z.ZodType<Prisma.dictRightsFormUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormUpdateInput>;
export const dictRightsFormUpdateInputObjectZodSchema = makeSchema();
