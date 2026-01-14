import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblpubisbnscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPubISBNScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPubISBNScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPubISBNScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPubISBNScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPubISBNScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  PubID: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
})]).optional(),
  PubISBN1: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(5)]).optional(),
  PubISBN2: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(7)]).optional()
}).strict();
export const tblPubISBNScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblPubISBNScalarWhereWithAggregatesInput> = tblpubisbnscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblPubISBNScalarWhereWithAggregatesInput>;
export const tblPubISBNScalarWhereWithAggregatesInputObjectZodSchema = tblpubisbnscalarwherewithaggregatesinputSchema;
