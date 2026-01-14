import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  CustID: SortOrderSchema.optional()
}).strict();
export const tblMailingListsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMailingListsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsAvgOrderByAggregateInput>;
export const tblMailingListsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
