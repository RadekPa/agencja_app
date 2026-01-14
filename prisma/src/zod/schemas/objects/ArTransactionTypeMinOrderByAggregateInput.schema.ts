import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional(),
  ArTypeDescription: SortOrderSchema.optional(),
  ArTypeDescriptionPL: SortOrderSchema.optional()
}).strict();
export const ArTransactionTypeMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeMinOrderByAggregateInput>;
export const ArTransactionTypeMinOrderByAggregateInputObjectZodSchema = makeSchema();
