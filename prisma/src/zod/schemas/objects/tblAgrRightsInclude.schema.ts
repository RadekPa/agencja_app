import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictRoyTypeFindManySchema as dictRoyTypeFindManySchema } from '../findManydictRoyType.schema';
import { tblAgreementsArgsObjectSchema as tblAgreementsArgsObjectSchema } from './tblAgreementsArgs.schema';
import { dictDistributionTypeArgsObjectSchema as dictDistributionTypeArgsObjectSchema } from './dictDistributionTypeArgs.schema';
import { dictRightsFormArgsObjectSchema as dictRightsFormArgsObjectSchema } from './dictRightsFormArgs.schema';
import { dictRoyPriceTypeArgsObjectSchema as dictRoyPriceTypeArgsObjectSchema } from './dictRoyPriceTypeArgs.schema';
import { dictPriceTypeArgsObjectSchema as dictPriceTypeArgsObjectSchema } from './dictPriceTypeArgs.schema';
import { dictRoyAccountIntervalArgsObjectSchema as dictRoyAccountIntervalArgsObjectSchema } from './dictRoyAccountIntervalArgs.schema';
import { tblRoyRatesFindManySchema as tblRoyRatesFindManySchema } from '../findManytblRoyRates.schema';
import { TblAgrRightsCountOutputTypeArgsObjectSchema as TblAgrRightsCountOutputTypeArgsObjectSchema } from './TblAgrRightsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  dictRoyType: z.union([z.boolean(), z.lazy(() => dictRoyTypeFindManySchema)]).optional(),
  tblAgreements: z.union([z.boolean(), z.lazy(() => tblAgreementsArgsObjectSchema)]).optional(),
  dictDistributionType: z.union([z.boolean(), z.lazy(() => dictDistributionTypeArgsObjectSchema)]).optional(),
  dictRightsForm: z.union([z.boolean(), z.lazy(() => dictRightsFormArgsObjectSchema)]).optional(),
  dictRoyPriceType: z.union([z.boolean(), z.lazy(() => dictRoyPriceTypeArgsObjectSchema)]).optional(),
  dictPriceType: z.union([z.boolean(), z.lazy(() => dictPriceTypeArgsObjectSchema)]).optional(),
  dictRoyAccountInterval: z.union([z.boolean(), z.lazy(() => dictRoyAccountIntervalArgsObjectSchema)]).optional(),
  tblRoyRates: z.union([z.boolean(), z.lazy(() => tblRoyRatesFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TblAgrRightsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const tblAgrRightsIncludeObjectSchema: z.ZodType<Prisma.tblAgrRightsInclude> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsInclude>;
export const tblAgrRightsIncludeObjectZodSchema = makeSchema();
