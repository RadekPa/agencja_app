import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { tblAgrRightsOrderByRelationAggregateInputObjectSchema as tblAgrRightsOrderByRelationAggregateInputObjectSchema } from './tblAgrRightsOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  RightFormID: SortOrderSchema.optional(),
  RightFormDesc: SortOrderSchema.optional(),
  RightFormPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RightFormAbbPL: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  RightFormAbbEN: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tblAgrRights: z.lazy(() => tblAgrRightsOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictRightsFormOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictRightsFormOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictRightsFormOrderByWithRelationInput>;
export const dictRightsFormOrderByWithRelationInputObjectZodSchema = makeSchema();
