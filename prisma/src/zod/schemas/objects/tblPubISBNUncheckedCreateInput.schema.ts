import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';


import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  PubID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
}),
  PubISBN1: z.string().max(5),
  PubISBN2: z.string().max(7)
}).strict();
export const tblPubISBNUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblPubISBNUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNUncheckedCreateInput>;
export const tblPubISBNUncheckedCreateInputObjectZodSchema = makeSchema();
