import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { tblAgreementsUpdateOneWithoutTblRoyRatesNestedInputObjectSchema as tblAgreementsUpdateOneWithoutTblRoyRatesNestedInputObjectSchema } from './tblAgreementsUpdateOneWithoutTblRoyRatesNestedInput.schema'

const makeSchema = () => z.object({
  Step: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  CpsMax: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Rate: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblAgreements: z.lazy(() => tblAgreementsUpdateOneWithoutTblRoyRatesNestedInputObjectSchema).optional()
}).strict();
export const tblRoyRatesUpdateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.tblRoyRatesUpdateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblRoyRatesUpdateWithoutTblAgrRightsInput>;
export const tblRoyRatesUpdateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
