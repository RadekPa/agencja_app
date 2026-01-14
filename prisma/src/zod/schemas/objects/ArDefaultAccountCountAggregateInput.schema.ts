import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionType: z.literal(true).optional(),
  DefaultDebitAccount: z.literal(true).optional(),
  DefaultCreditAccount: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ArDefaultAccountCountAggregateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountCountAggregateInputType>;
export const ArDefaultAccountCountAggregateInputObjectZodSchema = makeSchema();
