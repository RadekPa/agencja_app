import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dictroytypescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema), z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema), z.lazy(() => dictRoyTypeScalarWhereInputObjectSchema).array()]).optional(),
  RoyTypeID: z.union([z.lazy(() => DecimalFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'RoyTypeID' must be a Decimal",
})]).optional(),
  AgrRightID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyTypeDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const dictRoyTypeScalarWhereInputObjectSchema: z.ZodType<Prisma.dictRoyTypeScalarWhereInput> = dictroytypescalarwhereinputSchema as unknown as z.ZodType<Prisma.dictRoyTypeScalarWhereInput>;
export const dictRoyTypeScalarWhereInputObjectZodSchema = dictroytypescalarwhereinputSchema;
