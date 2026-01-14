import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  PubID: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  PubISBN1: z.union([z.string().max(5), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  PubISBN2: z.union([z.string().max(7), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const tblPubISBNUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.tblPubISBNUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUncheckedUpdateManyInput>;
export const tblPubISBNUncheckedUpdateManyInputObjectZodSchema = makeSchema();
