import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  PriceTypeID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  PriceTypeDesc: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PriceTypePL: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInput>;
export const dictPriceTypeUncheckedUpdateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
