import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const LocalUserAvgAggregateInputObjectSchema: z.ZodType<Prisma.LocalUserAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserAvgAggregateInputType>;
export const LocalUserAvgAggregateInputObjectZodSchema = makeSchema();
