import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionType: z.number().int(),
  DefaultDebitAccount: z.number().int(),
  DefaultCreditAccount: z.number().int()
}).strict();
export const ArDefaultAccountCreateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountCreateInput>;
export const ArDefaultAccountCreateInputObjectZodSchema = makeSchema();
