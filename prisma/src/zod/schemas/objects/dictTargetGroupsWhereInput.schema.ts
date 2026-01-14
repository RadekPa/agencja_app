import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dicttargetgroupswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictTargetGroupsWhereInputObjectSchema), z.lazy(() => dictTargetGroupsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictTargetGroupsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictTargetGroupsWhereInputObjectSchema), z.lazy(() => dictTargetGroupsWhereInputObjectSchema).array()]).optional(),
  TargetGroupID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'TargetGroupID' must be a Decimal",
})]).optional(),
  TargetGroupDesc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable()
}).strict();
export const dictTargetGroupsWhereInputObjectSchema: z.ZodType<Prisma.dictTargetGroupsWhereInput> = dicttargetgroupswhereinputSchema as unknown as z.ZodType<Prisma.dictTargetGroupsWhereInput>;
export const dictTargetGroupsWhereInputObjectZodSchema = dicttargetgroupswhereinputSchema;
