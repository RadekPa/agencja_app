import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema as tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema } from './tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInput.schema'

const makeSchema = () => z.object({
  AgrRightID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AgrID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RightID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PriceTypeID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoyPriceTypeID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoyAccountIntervalID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DistID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblRoyRates: z.lazy(() => tblRoyRatesUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInput>;
export const tblAgrRightsUncheckedUpdateWithoutDictRoyTypeInputObjectZodSchema = makeSchema();
