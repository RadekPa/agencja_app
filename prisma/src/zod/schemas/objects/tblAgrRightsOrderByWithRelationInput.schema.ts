import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictRoyTypeOrderByRelationAggregateInputObjectSchema as dictRoyTypeOrderByRelationAggregateInputObjectSchema } from './dictRoyTypeOrderByRelationAggregateInput.schema';
import { tblAgreementsOrderByWithRelationInputObjectSchema as tblAgreementsOrderByWithRelationInputObjectSchema } from './tblAgreementsOrderByWithRelationInput.schema';
import { dictDistributionTypeOrderByWithRelationInputObjectSchema as dictDistributionTypeOrderByWithRelationInputObjectSchema } from './dictDistributionTypeOrderByWithRelationInput.schema';
import { dictRightsFormOrderByWithRelationInputObjectSchema as dictRightsFormOrderByWithRelationInputObjectSchema } from './dictRightsFormOrderByWithRelationInput.schema';
import { dictRoyPriceTypeOrderByWithRelationInputObjectSchema as dictRoyPriceTypeOrderByWithRelationInputObjectSchema } from './dictRoyPriceTypeOrderByWithRelationInput.schema';
import { dictPriceTypeOrderByWithRelationInputObjectSchema as dictPriceTypeOrderByWithRelationInputObjectSchema } from './dictPriceTypeOrderByWithRelationInput.schema';
import { dictRoyAccountIntervalOrderByWithRelationInputObjectSchema as dictRoyAccountIntervalOrderByWithRelationInputObjectSchema } from './dictRoyAccountIntervalOrderByWithRelationInput.schema';
import { tblRoyRatesOrderByRelationAggregateInputObjectSchema as tblRoyRatesOrderByRelationAggregateInputObjectSchema } from './tblRoyRatesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  AgrRightID: SortOrderSchema.optional(),
  AgrID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RightID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  PriceTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyPriceTypeID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RoyAccountIntervalID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  DistID: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dictRoyType: z.lazy(() => dictRoyTypeOrderByRelationAggregateInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByWithRelationInputObjectSchema).optional(),
  dictDistributionType: z.lazy(() => dictDistributionTypeOrderByWithRelationInputObjectSchema).optional(),
  dictRightsForm: z.lazy(() => dictRightsFormOrderByWithRelationInputObjectSchema).optional(),
  dictRoyPriceType: z.lazy(() => dictRoyPriceTypeOrderByWithRelationInputObjectSchema).optional(),
  dictPriceType: z.lazy(() => dictPriceTypeOrderByWithRelationInputObjectSchema).optional(),
  dictRoyAccountInterval: z.lazy(() => dictRoyAccountIntervalOrderByWithRelationInputObjectSchema).optional(),
  tblRoyRates: z.lazy(() => tblRoyRatesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const tblAgrRightsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.tblAgrRightsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrRightsOrderByWithRelationInput>;
export const tblAgrRightsOrderByWithRelationInputObjectZodSchema = makeSchema();
