import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUpdateManyWithoutDictRoyPriceTypeNestedInputObjectSchema as tblAgrRightsUpdateManyWithoutDictRoyPriceTypeNestedInputObjectSchema } from './tblAgrRightsUpdateManyWithoutDictRoyPriceTypeNestedInput.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyPriceTypeDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyPriceTypePL: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUpdateManyWithoutDictRoyPriceTypeNestedInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeUpdateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUpdateInput>;
export const dictRoyPriceTypeUpdateInputObjectZodSchema = makeSchema();
