import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ArTransactionDetailOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionDetailOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionDetailOrderByRelationAggregateInput>;
export const ArTransactionDetailOrderByRelationAggregateInputObjectZodSchema = makeSchema();
