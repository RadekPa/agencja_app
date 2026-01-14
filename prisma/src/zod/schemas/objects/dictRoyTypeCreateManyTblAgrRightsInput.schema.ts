import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


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
  RoyTypeDesc: z.string().max(30)
}).strict();
export const dictRoyTypeCreateManyTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeCreateManyTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeCreateManyTblAgrRightsInput>;
export const dictRoyTypeCreateManyTblAgrRightsInputObjectZodSchema = makeSchema();
