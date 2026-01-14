import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Dbo_LocalUserSumAggregateInputObjectSchema: z.ZodType<Prisma.Dbo_LocalUserSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Dbo_LocalUserSumAggregateInputType>;
export const Dbo_LocalUserSumAggregateInputObjectZodSchema = makeSchema();
