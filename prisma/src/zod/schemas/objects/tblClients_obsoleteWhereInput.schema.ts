import * as z from 'zod';
import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { TblCustomersScalarRelationFilterObjectSchema as TblCustomersScalarRelationFilterObjectSchema } from './TblCustomersScalarRelationFilter.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { DictRepModesNullableScalarRelationFilterObjectSchema as DictRepModesNullableScalarRelationFilterObjectSchema } from './DictRepModesNullableScalarRelationFilter.schema';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './dictRepModesWhereInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const tblclients_obsoletewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblClients_obsoleteWhereInputObjectSchema), z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblClients_obsoleteWhereInputObjectSchema), z.lazy(() => tblClients_obsoleteWhereInputObjectSchema).array()]).optional(),
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
  DefAgrDoc: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(30)]).optional().nullable(),
  Jurisdiction: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(200)]).optional().nullable(),
  tblCustomers: z.union([z.lazy(() => TblCustomersScalarRelationFilterObjectSchema), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  dictRepModes: z.union([z.lazy(() => DictRepModesNullableScalarRelationFilterObjectSchema), z.lazy(() => dictRepModesWhereInputObjectSchema)]).optional()
}).strict();
export const tblClients_obsoleteWhereInputObjectSchema: z.ZodType<Prisma.tblClients_obsoleteWhereInput> = tblclients_obsoletewhereinputSchema as unknown as z.ZodType<Prisma.tblClients_obsoleteWhereInput>;
export const tblClients_obsoleteWhereInputObjectZodSchema = tblclients_obsoletewhereinputSchema;
