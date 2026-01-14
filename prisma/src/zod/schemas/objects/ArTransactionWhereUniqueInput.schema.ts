import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  TransactionID: z.number().int().optional()
}).strict();
export const ArTransactionWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArTransactionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionWhereUniqueInput>;
export const ArTransactionWhereUniqueInputObjectZodSchema = makeSchema();
