import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  SubClassCode: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional()
}).strict();
export const tblMailingListsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMailingListsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsMaxOrderByAggregateInput>;
export const tblMailingListsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
