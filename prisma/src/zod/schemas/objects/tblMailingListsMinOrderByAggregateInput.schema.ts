import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  SubClassCode: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional()
}).strict();
export const tblMailingListsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMailingListsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsMinOrderByAggregateInput>;
export const tblMailingListsMinOrderByAggregateInputObjectZodSchema = makeSchema();
