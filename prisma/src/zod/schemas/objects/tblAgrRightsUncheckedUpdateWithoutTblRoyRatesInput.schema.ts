import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema as dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema } from './dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInput.schema'

const makeSchema = () => z.object({
  AgrRightID: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  AgrID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RightID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  PriceTypeID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoyPriceTypeID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  RoyAccountIntervalID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DistID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dictRoyType: z.lazy(() => dictRoyTypeUncheckedUpdateManyWithoutTblAgrRightsNestedInputObjectSchema).optional()
}).strict();
export const tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInput>;
export const tblAgrRightsUncheckedUpdateWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
