import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionType: z.number().int(),
  DefaultDebitAccount: z.number().int(),
  DefaultCreditAccount: z.number().int()
}).strict();
export const ArDefaultAccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ArDefaultAccountUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArDefaultAccountUncheckedCreateInput>;
export const ArDefaultAccountUncheckedCreateInputObjectZodSchema = makeSchema();
