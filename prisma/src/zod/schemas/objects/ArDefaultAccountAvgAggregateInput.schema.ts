import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionType: z.literal(true).optional(),
  DefaultDebitAccount: z.literal(true).optional(),
  DefaultCreditAccount: z.literal(true).optional()
}).strict();
export const ArDefaultAccountAvgAggregateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountAvgAggregateInputType>;
export const ArDefaultAccountAvgAggregateInputObjectZodSchema = makeSchema();
