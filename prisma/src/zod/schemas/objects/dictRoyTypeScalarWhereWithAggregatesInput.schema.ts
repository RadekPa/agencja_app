import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dictroytypescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRoyTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRoyTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRoyTypeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRoyTypeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictRoyTypeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  RoyTypeID: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'RoyTypeID' must be a Decimal",
})]).optional(),
  AgrRightID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyTypeDesc: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(30)]).optional()
}).strict();
export const dictRoyTypeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictRoyTypeScalarWhereWithAggregatesInput> = dictroytypescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictRoyTypeScalarWhereWithAggregatesInput>;
export const dictRoyTypeScalarWhereWithAggregatesInputObjectZodSchema = dictroytypescalarwherewithaggregatesinputSchema;
