import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.literal(true).optional(),
  AccountDescription: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ArAccountCountAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountCountAggregateInputType>;
export const ArAccountCountAggregateInputObjectZodSchema = makeSchema();
