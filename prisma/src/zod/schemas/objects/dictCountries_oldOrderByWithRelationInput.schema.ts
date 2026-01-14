import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictStatesOrderByRelationAggregateInputObjectSchema as dictStatesOrderByRelationAggregateInputObjectSchema } from './dictStatesOrderByRelationAggregateInput.schema';
import { tblAgreementsOrderByRelationAggregateInputObjectSchema as tblAgreementsOrderByRelationAggregateInputObjectSchema } from './tblAgreementsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  CountryID: SortOrderSchema.optional(),
  CountryDesc: SortOrderSchema.optional(),
  CountryPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Tax: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  Code: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  EU: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dictStates: z.lazy(() => dictStatesOrderByRelationAggregateInputObjectSchema).optional(),
  tblAgreements: z.lazy(() => tblAgreementsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictCountries_oldOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictCountries_oldOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldOrderByWithRelationInput>;
export const dictCountries_oldOrderByWithRelationInputObjectZodSchema = makeSchema();
