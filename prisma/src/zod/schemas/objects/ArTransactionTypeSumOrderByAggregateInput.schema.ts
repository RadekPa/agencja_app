import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  ArType: SortOrderSchema.optional()
}).strict();
export const ArTransactionTypeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeSumOrderByAggregateInput>;
export const ArTransactionTypeSumOrderByAggregateInputObjectZodSchema = makeSchema();
