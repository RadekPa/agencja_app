import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblPublishersScalarRelationFilterObjectSchema as TblPublishersScalarRelationFilterObjectSchema } from './TblPublishersScalarRelationFilter.schema';
import { tblPublishersWhereInputObjectSchema as tblPublishersWhereInputObjectSchema } from './tblPublishersWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblpubisbnwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPubISBNWhereInputObjectSchema), z.lazy(() => tblPubISBNWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPubISBNWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPubISBNWhereInputObjectSchema), z.lazy(() => tblPubISBNWhereInputObjectSchema).array()]).optional(),
  PubID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
})]).optional(),
  PubISBN1: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(5)]).optional(),
  PubISBN2: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(7)]).optional(),
  tblPublishers: z.union([z.lazy(() => TblPublishersScalarRelationFilterObjectSchema), z.lazy(() => tblPublishersWhereInputObjectSchema)]).optional()
}).strict();
export const tblPubISBNWhereInputObjectSchema: z.ZodType<Prisma.tblPubISBNWhereInput> = tblpubisbnwhereinputSchema as unknown as z.ZodType<Prisma.tblPubISBNWhereInput>;
export const tblPubISBNWhereInputObjectZodSchema = tblpubisbnwhereinputSchema;
