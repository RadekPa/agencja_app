import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  TransactionType: SortOrderSchema.optional(),
  DefaultDebitAccount: SortOrderSchema.optional(),
  DefaultCreditAccount: SortOrderSchema.optional()
}).strict();
export const ArDefaultAccountCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountCountOrderByAggregateInput>;
export const ArDefaultAccountCountOrderByAggregateInputObjectZodSchema = makeSchema();
