import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { tblPubISBNUncheckedCreateNestedManyWithoutTblPublishersInputObjectSchema as tblPubISBNUncheckedCreateNestedManyWithoutTblPublishersInputObjectSchema } from './tblPubISBNUncheckedCreateNestedManyWithoutTblPublishersInput.schema'

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
  PubName: z.string().max(250).optional().nullable(),
  PubAbb: z.string().max(20).optional().nullable(),
  ParentPubID: z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'ParentPubID' must be a Decimal",
}).optional().nullable(),
  tblPubISBN: z.lazy(() => tblPubISBNUncheckedCreateNestedManyWithoutTblPublishersInputObjectSchema).optional()
}).strict();
export const tblPublishersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.tblPublishersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblPublishersUncheckedCreateInput>;
export const tblPublishersUncheckedCreateInputObjectZodSchema = makeSchema();
