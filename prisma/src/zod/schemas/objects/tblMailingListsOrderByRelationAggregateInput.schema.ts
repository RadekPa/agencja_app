import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const tblMailingListsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.tblMailingListsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsOrderByRelationAggregateInput>;
export const tblMailingListsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
