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
  RoyTypeDesc: z.string()
}).strict();
export const dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectSchema: z.ZodType<Prisma.dictRoyTypeUncheckedCreateWithoutTblAgrRightsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRoyTypeUncheckedCreateWithoutTblAgrRightsInput>;
export const dictRoyTypeUncheckedCreateWithoutTblAgrRightsInputObjectZodSchema = makeSchema();
