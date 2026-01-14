import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUpdateManyWithoutDictPriceTypeNestedInputObjectSchema as tblAgrRightsUpdateManyWithoutDictPriceTypeNestedInputObjectSchema } from './tblAgrRightsUpdateManyWithoutDictPriceTypeNestedInput.schema'

const makeSchema = () => z.object({
  PriceTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  PriceTypeDesc: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PriceTypePL: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUpdateManyWithoutDictPriceTypeNestedInputObjectSchema).optional()
}).strict();
export const dictPriceTypeUpdateInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUpdateInput>;
export const dictPriceTypeUpdateInputObjectZodSchema = makeSchema();
