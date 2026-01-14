import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { TblAgreementsNullableScalarRelationFilterObjectSchema as TblAgreementsNullableScalarRelationFilterObjectSchema } from './TblAgreementsNullableScalarRelationFilter.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { TblAgrRightsScalarRelationFilterObjectSchema as TblAgrRightsScalarRelationFilterObjectSchema } from './TblAgrRightsScalarRelationFilter.schema';
import { tblAgrRightsWhereInputObjectSchema as tblAgrRightsWhereInputObjectSchema } from './tblAgrRightsWhereInput.schema'

const tblroyrateswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblRoyRatesWhereInputObjectSchema), z.lazy(() => tblRoyRatesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblRoyRatesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblRoyRatesWhereInputObjectSchema), z.lazy(() => tblRoyRatesWhereInputObjectSchema).array()]).optional(),
  Step: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  CpsMax: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  Rate: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  tblAgreements: z.union([z.lazy(() => TblAgreementsNullableScalarRelationFilterObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  tblAgrRights: z.union([z.lazy(() => TblAgrRightsScalarRelationFilterObjectSchema), z.lazy(() => tblAgrRightsWhereInputObjectSchema)]).optional()
}).strict();
export const tblRoyRatesWhereInputObjectSchema: z.ZodType<Prisma.tblRoyRatesWhereInput> = tblroyrateswhereinputSchema as unknown as z.ZodType<Prisma.tblRoyRatesWhereInput>;
export const tblRoyRatesWhereInputObjectZodSchema = tblroyrateswhereinputSchema;
