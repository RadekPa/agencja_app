import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.literal(true).optional()
}).strict();
export const ArTransactionTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeAvgAggregateInputType>;
export const ArTransactionTypeAvgAggregateInputObjectZodSchema = makeSchema();
