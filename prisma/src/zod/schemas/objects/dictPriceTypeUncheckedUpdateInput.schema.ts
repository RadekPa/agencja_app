import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInputObjectSchema as tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInputObjectSchema } from './tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInput.schema'

const makeSchema = () => z.object({
  PriceTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  PriceTypeDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PriceTypePL: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUncheckedUpdateManyWithoutDictPriceTypeNestedInputObjectSchema).optional()
}).strict();
export const dictPriceTypeUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUncheckedUpdateInput>;
export const dictPriceTypeUncheckedUpdateInputObjectZodSchema = makeSchema();
