import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblpubisbnscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPubISBNScalarWhereInputObjectSchema), z.lazy(() => tblPubISBNScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPubISBNScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPubISBNScalarWhereInputObjectSchema), z.lazy(() => tblPubISBNScalarWhereInputObjectSchema).array()]).optional(),
  PubID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
})]).optional(),
  PubISBN1: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  PubISBN2: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const tblPubISBNScalarWhereInputObjectSchema: z.ZodType<Prisma.tblPubISBNScalarWhereInput> = tblpubisbnscalarwhereinputSchema as unknown as z.ZodType<Prisma.tblPubISBNScalarWhereInput>;
export const tblPubISBNScalarWhereInputObjectZodSchema = tblpubisbnscalarwhereinputSchema;
