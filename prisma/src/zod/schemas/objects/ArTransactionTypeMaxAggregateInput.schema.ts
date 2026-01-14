import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ArType: z.literal(true).optional(),
  ArTypeDescription: z.literal(true).optional(),
  ArTypeDescriptionPL: z.literal(true).optional()
}).strict();
export const ArTransactionTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.ArTransactionTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArTransactionTypeMaxAggregateInputType>;
export const ArTransactionTypeMaxAggregateInputObjectZodSchema = makeSchema();
