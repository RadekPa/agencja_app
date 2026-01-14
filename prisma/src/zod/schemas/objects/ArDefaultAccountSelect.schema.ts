import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionType: z.boolean().optional(),
  DefaultDebitAccount: z.boolean().optional(),
  DefaultCreditAccount: z.boolean().optional()
}).strict();
export const ArDefaultAccountSelectObjectSchema: z.ZodType<Prisma.ArDefaultAccountSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountSelect>;
export const ArDefaultAccountSelectObjectZodSchema = makeSchema();
