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
  PubISBN1: z.string(),
  PubISBN2: z.string()
}).strict();
export const tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInputObjectSchema: z.ZodType<Prisma.tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInput>;
export const tblPubISBNPubIDPubISBN1PubISBN2CompoundUniqueInputObjectZodSchema = makeSchema();
