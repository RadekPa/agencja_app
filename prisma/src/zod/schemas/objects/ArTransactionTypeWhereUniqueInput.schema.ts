import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.number().int().optional()
}).strict();
export const ArTransactionTypeWhereUniqueInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeWhereUniqueInput>;
export const ArTransactionTypeWhereUniqueInputObjectZodSchema = makeSchema();
