import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  AdvID: SortOrderSchema.optional(),
  Inst: SortOrderSchema.optional(),
  AgrID: SortOrderSchema.optional(),
  AdvTermId: SortOrderSchema.optional(),
  AdvTypeId: SortOrderSchema.optional(),
  Amount: SortOrderSchema.optional(),
  RoyID: SortOrderSchema.optional()
}).strict();
export const tblAdvanceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAdvanceAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceAvgOrderByAggregateInput>;
export const tblAdvanceAvgOrderByAggregateInputObjectZodSchema = makeSchema();
