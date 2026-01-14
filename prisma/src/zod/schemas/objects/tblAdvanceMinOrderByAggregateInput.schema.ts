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
  AdvTermDate: SortOrderSchema.optional(),
  RoyID: SortOrderSchema.optional()
}).strict();
export const tblAdvanceMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAdvanceMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceMinOrderByAggregateInput>;
export const tblAdvanceMinOrderByAggregateInputObjectZodSchema = makeSchema();
