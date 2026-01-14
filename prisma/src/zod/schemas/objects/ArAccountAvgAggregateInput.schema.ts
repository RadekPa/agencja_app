import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.literal(true).optional()
}).strict();
export const ArAccountAvgAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountAvgAggregateInputType>;
export const ArAccountAvgAggregateInputObjectZodSchema = makeSchema();
