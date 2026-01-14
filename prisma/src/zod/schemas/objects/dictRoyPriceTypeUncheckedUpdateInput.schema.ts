import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInput.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyPriceTypeDesc: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyPriceTypePL: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictRoyPriceTypeNestedInputObjectSchema).optional()
}).strict();
export const dictRoyPriceTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUncheckedUpdateInput>;
export const dictRoyPriceTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
