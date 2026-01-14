import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema as DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblclients_obsoletescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => tblClients_obsoleteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblClients_obsoleteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblClients_obsoleteScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblClients_obsoleteScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => tblClients_obsoleteScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  CustID: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  RepModeID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  GraalID: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  Commission: z.union([z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Decimal),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'Commission' must be a Decimal",
})]).optional().nullable(),
  DefAgrDoc: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  Jurisdiction: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(200)]).optional().nullable()
}).strict();
export const tblClients_obsoleteScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteScalarWhereWithAggregatesInput> = tblclients_obsoletescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.tblClients_obsoleteScalarWhereWithAggregatesInput>;
export const tblClients_obsoleteScalarWhereWithAggregatesInputObjectZodSchema = tblclients_obsoletescalarwherewithaggregatesinputSchema;
