import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  RoyPriceTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyPriceTypeDesc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyPriceTypePL: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInput>;
export const dictRoyPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
