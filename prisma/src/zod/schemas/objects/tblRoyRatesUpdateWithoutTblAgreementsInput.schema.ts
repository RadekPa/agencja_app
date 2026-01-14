import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInputObjectSchema as tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInputObjectSchema } from './tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInput.schema'

const makeSchema = () => z.object({
  Step: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CpsMax: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Rate: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgrRights: z.lazy(() => tblAgrRightsUpdateOneRequiredWithoutTblRoyRatesNestedInputObjectSchema).optional()
}).strict();
export const tblRoyRatesUpdateWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpdateWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateWithoutTblAgreementsInput>;
export const tblRoyRatesUpdateWithoutTblAgreementsInputObjectZodSchema = makeSchema();
