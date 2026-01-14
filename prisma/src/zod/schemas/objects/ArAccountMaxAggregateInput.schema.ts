import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.literal(true).optional(),
  AccountDescription: z.literal(true).optional()
}).strict();
export const ArAccountMaxAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountMaxAggregateInputType>;
export const ArAccountMaxAggregateInputObjectZodSchema = makeSchema();
