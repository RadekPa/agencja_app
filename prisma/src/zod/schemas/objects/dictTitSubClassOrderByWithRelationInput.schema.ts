import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { dictTitMainClassOrderByWithRelationInputObjectSchema as dictTitMainClassOrderByWithRelationInputObjectSchema } from './dictTitMainClassOrderByWithRelationInput.schema';
import { tblMailingListsOrderByRelationAggregateInputObjectSchema as tblMailingListsOrderByRelationAggregateInputObjectSchema } from './tblMailingListsOrderByRelationAggregateInput.schema';
import { tblTitSubClassOrderByRelationAggregateInputObjectSchema as tblTitSubClassOrderByRelationAggregateInputObjectSchema } from './tblTitSubClassOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  SubClassCode: SortOrderSchema.optional(),
  ClassCode: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  SubClassDesc: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  dictTitMainClass: z.lazy(() => dictTitMainClassOrderByWithRelationInputObjectSchema).optional(),
  tblMailingLists: z.lazy(() => tblMailingListsOrderByRelationAggregateInputObjectSchema).optional(),
  tblTitSubClass: z.lazy(() => tblTitSubClassOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const dictTitSubClassOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.dictTitSubClassOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.dictTitSubClassOrderByWithRelationInput>;
export const dictTitSubClassOrderByWithRelationInputObjectZodSchema = makeSchema();
