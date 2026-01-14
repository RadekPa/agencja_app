import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Dbo_LocalUserAvgAggregateInputObjectSchema: z.ZodType<Prisma.Dbo_LocalUserAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Dbo_LocalUserAvgAggregateInputType>;
export const Dbo_LocalUserAvgAggregateInputObjectZodSchema = makeSchema();
