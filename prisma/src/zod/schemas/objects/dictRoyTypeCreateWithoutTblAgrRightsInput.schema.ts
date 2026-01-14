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
export const dictRoyTypeCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeCreateWithoutTblAgrRightsInput>;
export const dictRoyTypeCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
