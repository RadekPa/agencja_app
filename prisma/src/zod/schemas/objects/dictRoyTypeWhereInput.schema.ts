import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TblAgrRightsNullableScalarRelationFilterObjectSchema as TblAgrRightsNullableScalarRelationFilterObjectSchema } from './TblAgrRightsNullableScalarRelationFilter.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const dictroytypewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => dictRoyTypeWhereInputObjectSchema), z.lazy(() => dictRoyTypeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => dictRoyTypeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => dictRoyTypeWhereInputObjectSchema), z.lazy(() => dictRoyTypeWhereInputObjectSchema).array()]).optional(),
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
  RoyTypeDesc: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(30)]).optional(),
  tblAgrRights: z.union([z.lazy(() => TblAgrRightsNullableScalarRelationFilterObjectSchema), z.lazy(() => tblAgrRightsWhereInputObjectSchema)]).optional()
}).strict();
export const dictRoyTypeWhereInputObjectSchema: z.ZodType<Prisma.dictRoyTypeWhereInput> = dictroytypewhereinputSchema as unknown as z.ZodType<Prisma.dictRoyTypeWhereInput>;
export const dictRoyTypeWhereInputObjectZodSchema = dictroytypewhereinputSchema;
