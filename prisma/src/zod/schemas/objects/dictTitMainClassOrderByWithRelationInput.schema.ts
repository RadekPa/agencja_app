import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictTitSubClassOrderByRelationAggregateInputObjectSchema as dictTitSubClassOrderByRelationAggregateInputObjectSchema } from './dictTitSubClassOrderByRelationAggregateInput.schema';
import { tblMailingListsOrderByRelationAggregateInputObjectSchema as tblMailingListsOrderByRelationAggregateInputObjectSchema } from './tblMailingListsOrderByRelationAggregateInput.schema';
import { tblTitlesOrderByRelationAggregateInputObjectSchema as tblTitlesOrderByRelationAggregateInputObjectSchema } from './tblTitlesOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  ClassDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dictTitSubClass: z.lazy(() => dictTitSubClassOrderByRelationAggregateInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitles: z.lazy(() => tblTitlesOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictTitMainClassOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictTitMainClassOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitMainClassOrderByWithRelationInput>;
export const dictTitMainClassOrderByWithRelationInputObjectZodSchema = makeSchema();
