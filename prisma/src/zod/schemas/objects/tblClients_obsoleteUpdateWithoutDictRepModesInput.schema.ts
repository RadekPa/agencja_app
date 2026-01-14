import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema as NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInputObjectSchema as tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInputObjectSchema } from './tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  GraalID: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Commission: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
}), z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  DefAgrDoc: z.union([z.string().max(30), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  Jurisdiction: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tblCustomers: z.lazy(() => tblCustomersUpdateOneRequiredWithoutTblClients_obsoleteNestedInputObjectSchema).optional()
}).strict();
export const tblClients_obsoleteUpdateWithoutDictRepModesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteUpdateWithoutDictRepModesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblClients_obsoleteUpdateWithoutDictRepModesInput>;
export const tblClients_obsoleteUpdateWithoutDictRepModesInputObjectZodSchema = makeSchema();
