import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ClassCode: SortOrderSchema.optional(),
  SubClassCode: SortOrderSchema.optional(),
  CustID: SortOrderSchema.optional()
}).strict();
export const tblMailingListsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblMailingListsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblMailingListsCountOrderByAggregateInput>;
export const tblMailingListsCountOrderByAggregateInputObjectZodSchema = makeSchema();
