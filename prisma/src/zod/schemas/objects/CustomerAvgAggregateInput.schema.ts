import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  country: z.literal(true).optional()
}).strict();
export const CustomerAvgAggregateInputObjectSchema: z.ZodType<Prisma.CustomerAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAvgAggregateInputType>;
export const CustomerAvgAggregateInputObjectZodSchema = makeSchema();
