import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { TblPubISBNListRelationFilterObjectSchema as TblPubISBNListRelationFilterObjectSchema } from './TblPubISBNListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblpublisherswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPublishersWhereInputObjectSchema), z.lazy(() => tblPublishersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPublishersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPublishersWhereInputObjectSchema), z.lazy(() => tblPublishersWhereInputObjectSchema).array()]).optional(),
  PubID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
})]).optional(),
  PubName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  PubAbb: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  ParentPubID: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'ParentPubID' must be a Decimal",
})]).optional().nullable(),
  tblPubISBN: z.lazy(() => TblPubISBNListRelationFilterObjectSchema).optional()
}).strict();
export const tblPublishersWhereInputObjectSchema: z.ZodType<Prisma.tblPublishersWhereInput> = tblpublisherswhereinputSchema as unknown as z.ZodType<Prisma.tblPublishersWhereInput>;
export const tblPublishersWhereInputObjectZodSchema = tblpublisherswhereinputSchema;
