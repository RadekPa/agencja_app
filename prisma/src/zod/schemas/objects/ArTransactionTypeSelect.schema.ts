import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.boolean().optional(),
  ArTypeDescription: z.boolean().optional(),
  ArTypeDescriptionPL: z.boolean().optional()
}).strict();
export const ArTransactionTypeSelectObjectSchema: z.ZodType<Prisma.ArTransactionTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeSelect>;
export const ArTransactionTypeSelectObjectZodSchema = makeSchema();
