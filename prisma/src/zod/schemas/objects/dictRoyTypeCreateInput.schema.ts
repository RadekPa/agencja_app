import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblAgrRightsCreateNestedOneWithoutDictRoyTypeInputObjectSchema as tblAgrRightsCreateNestedOneWithoutDictRoyTypeInputObjectSchema } from './tblAgrRightsCreateNestedOneWithoutDictRoyTypeInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  RoyTypeID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'RoyTypeID' must be a Decimal",
}),
  RoyTypeDesc: z.string().max(30),
  tblAgrRights: z.lazy(() => tblAgrRightsCreateNestedOneWithoutDictRoyTypeInputObjectSchema).optional()
}).strict();
export const dictRoyTypeCreateInputObjectSchema: z.ZodType<Prisma.dictRoyTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeCreateInput>;
export const dictRoyTypeCreateInputObjectZodSchema = makeSchema();
