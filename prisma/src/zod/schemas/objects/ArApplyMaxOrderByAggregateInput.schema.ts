import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ApplyID: SortOrderSchema.optional(),
  DebitID: SortOrderSchema.optional(),
  CreditID: SortOrderSchema.optional(),
  TaxPerc: SortOrderSchema.optional(),
  TaxAmt: SortOrderSchema.optional(),
  AmtApplied: SortOrderSchema.optional(),
  GraalPerc: SortOrderSchema.optional(),
  GraalAmt: SortOrderSchema.optional(),
  Notes: SortOrderSchema.optional(),
  ApplyDate: SortOrderSchema.optional(),
  TaxSet: SortOrderSchema.optional()
}).strict();
export const ArApplyMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArApplyMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArApplyMaxOrderByAggregateInput>;
export const ArApplyMaxOrderByAggregateInputObjectZodSchema = makeSchema();
