import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dicttargetgroupsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => dictTargetGroupsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictTargetGroupsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictTargetGroupsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictTargetGroupsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => dictTargetGroupsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  TargetGroupID: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'TargetGroupID' must be a Decimal",
})]).optional(),
  TargetGroupDesc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictTargetGroupsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsScalarWhereWithAggregatesInput> = dicttargetgroupsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.dictTargetGroupsScalarWhereWithAggregatesInput>;
export const dictTargetGroupsScalarWhereWithAggregatesInputObjectZodSchema = dicttargetgroupsscalarwherewithaggregatesinputSchema;
