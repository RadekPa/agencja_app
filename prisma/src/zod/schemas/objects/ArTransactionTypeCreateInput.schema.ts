import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.number().int(),
  ArTypeDescription: z.string().max(40).optional().nullable(),
  ArTypeDescriptionPL: z.string().max(50).optional().nullable()
}).strict();
export const ArTransactionTypeCreateInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeCreateInput>;
export const ArTransactionTypeCreateInputObjectZodSchema = makeSchema();
