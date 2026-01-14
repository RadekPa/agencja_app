import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DictRoyTypeListRelationFilterObjectSchema as DictRoyTypeListRelationFilterObjectSchema } from './DictRoyTypeListRelationFilter.schema';
import { TblAgreementsNullableScalarRelationFilterObjectSchema as TblAgreementsNullableScalarRelationFilterObjectSchema } from './TblAgreementsNullableScalarRelationFilter.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { DictDistributionTypeNullableScalarRelationFilterObjectSchema as DictDistributionTypeNullableScalarRelationFilterObjectSchema } from './DictDistributionTypeNullableScalarRelationFilter.schema';
import { dictDistributionTypeWhereInputObjectSchema as dictDistributionTypeWhereInputObjectSchema } from './dictDistributionTypeWhereInput.schema';
import { DictRightsFormNullableScalarRelationFilterObjectSchema as DictRightsFormNullableScalarRelationFilterObjectSchema } from './DictRightsFormNullableScalarRelationFilter.schema';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './dictRightsFormWhereInput.schema';
import { DictRoyPriceTypeNullableScalarRelationFilterObjectSchema as DictRoyPriceTypeNullableScalarRelationFilterObjectSchema } from './DictRoyPriceTypeNullableScalarRelationFilter.schema';
import { dictRoyPriceTypeWhereInputObjectSchema as dictRoyPriceTypeWhereInputObjectSchema } from './dictRoyPriceTypeWhereInput.schema';
import { DictPriceTypeNullableScalarRelationFilterObjectSchema as DictPriceTypeNullableScalarRelationFilterObjectSchema } from './DictPriceTypeNullableScalarRelationFilter.schema';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './dictPriceTypeWhereInput.schema';
import { DictRoyAccountIntervalNullableScalarRelationFilterObjectSchema as DictRoyAccountIntervalNullableScalarRelationFilterObjectSchema } from './DictRoyAccountIntervalNullableScalarRelationFilter.schema';
import { dictRoyAccountIntervalWhereInputObjectSchema as dictRoyAccountIntervalWhereInputObjectSchema } from './dictRoyAccountIntervalWhereInput.schema';
import { TblRoyRatesListRelationFilterObjectSchema as TblRoyRatesListRelationFilterObjectSchema } from './TblRoyRatesListRelationFilter.schema'

const tblagrrightswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tblAgrRightsWhereInputObjectSchema), z.lazy(() => tblAgrRightsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tblAgrRightsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tblAgrRightsWhereInputObjectSchema), z.lazy(() => tblAgrRightsWhereInputObjectSchema).array()]).optional(),
  AgrRightID: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  AgrID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RightID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  PriceTypeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyPriceTypeID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  RoyAccountIntervalID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  DistID: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  dictRoyType: z.lazy(() => DictRoyTypeListRelationFilterObjectSchema).optional(),
  tblAgreements: z.union([z.lazy(() => TblAgreementsNullableScalarRelationFilterObjectSchema), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  dictDistributionType: z.union([z.lazy(() => DictDistributionTypeNullableScalarRelationFilterObjectSchema), z.lazy(() => dictDistributionTypeWhereInputObjectSchema)]).optional(),
  dictRightsForm: z.union([z.lazy(() => DictRightsFormNullableScalarRelationFilterObjectSchema), z.lazy(() => dictRightsFormWhereInputObjectSchema)]).optional(),
  dictRoyPriceType: z.union([z.lazy(() => DictRoyPriceTypeNullableScalarRelationFilterObjectSchema), z.lazy(() => dictRoyPriceTypeWhereInputObjectSchema)]).optional(),
  dictPriceType: z.union([z.lazy(() => DictPriceTypeNullableScalarRelationFilterObjectSchema), z.lazy(() => dictPriceTypeWhereInputObjectSchema)]).optional(),
  dictRoyAccountInterval: z.union([z.lazy(() => DictRoyAccountIntervalNullableScalarRelationFilterObjectSchema), z.lazy(() => dictRoyAccountIntervalWhereInputObjectSchema)]).optional(),
  tblRoyRates: z.lazy(() => TblRoyRatesListRelationFilterObjectSchema).optional()
}).strict();
export const tblAgrRightsWhereInputObjectSchema: z.ZodType<Prisma.tblAgrRightsWhereInput> = tblagrrightswhereinputSchema as unknown as z.ZodType<Prisma.tblAgrRightsWhereInput>;
export const tblAgrRightsWhereInputObjectZodSchema = tblagrrightswhereinputSchema;
