import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFieldUpdateOperationsInputObjectSchema as DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInputObjectSchema as tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInputObjectSchema } from './tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  RoyTypeID: z.union([z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'RoyTypeID' must be a Decimal",
}), z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema)]).optional(),
  RoyTypeDesc: z.union([z.string().max(30), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsUpdateOneWithoutDictRoyTypeNestedInputObjectSchema).optional()
}).strict();
export const dictRoyTypeUpdateInputObjectSchema: z.ZodType<Prisma.dictRoyTypeUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeUpdateInput>;
export const dictRoyTypeUpdateInputObjectZodSchema = makeSchema();
