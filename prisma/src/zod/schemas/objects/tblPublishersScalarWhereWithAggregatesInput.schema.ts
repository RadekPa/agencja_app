import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema as DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblpublishersscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblPublishersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPublishersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblPublishersScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblPublishersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblPublishersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  PubID: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'PubID' must be a Decimal",
})]).optional(),
  PubName: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(250)]).optional().nullable(),
  PubAbb: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(20)]).optional().nullable(),
  ParentPubID: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'ParentPubID' must be a Decimal",
})]).optional().nullable()
}).strict();
export const tblPublishersScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblPublishersScalarWhereWithAggregatesInput> = tblpublishersscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblPublishersScalarWhereWithAggregatesInput>;
export const tblPublishersScalarWhereWithAggregatesInputObjectZodSchema = tblpublishersscalarwherewithaggregatesinputSchema;
