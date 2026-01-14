import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.literal(true).optional()
}).strict();
export const ArTransactionTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeSumAggregateInputType>;
export const ArTransactionTypeSumAggregateInputObjectZodSchema = makeSchema();
