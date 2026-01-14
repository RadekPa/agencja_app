import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.literal(true).optional(),
  AccountDescription: z.literal(true).optional()
}).strict();
export const ArAccountMinAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountMinAggregateInputType>;
export const ArAccountMinAggregateInputObjectZodSchema = makeSchema();
