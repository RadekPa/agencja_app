import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblclients_obsoletescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema), z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema), z.lazy(() => tblClients_obsoleteScalarWhereInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  RepModeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  GraalID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Commission: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
})]).optional().nullable(),
  DefAgrDoc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  Jurisdiction: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const tblClients_obsoleteScalarWhereInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteScalarWhereInput> = tblclients_obsoletescalarwhereinputSchema as unknown as z.ZodType<Prisma.tblClients_obsoleteScalarWhereInput>;
export const tblClients_obsoleteScalarWhereInputObjectZodSchema = tblclients_obsoletescalarwhereinputSchema;
