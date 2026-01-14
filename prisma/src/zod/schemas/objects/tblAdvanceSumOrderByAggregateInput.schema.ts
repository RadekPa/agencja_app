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
export const tblAdvanceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.tblAdvanceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAdvanceSumOrderByAggregateInput>;
export const tblAdvanceSumOrderByAggregateInputObjectZodSchema = makeSchema();
