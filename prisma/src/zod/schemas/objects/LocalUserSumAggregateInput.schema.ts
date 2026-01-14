import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const LocalUserSumAggregateInputObjectSchema: z.ZodType<Prisma.LocalUserSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.LocalUserSumAggregateInputType>;
export const LocalUserSumAggregateInputObjectZodSchema = makeSchema();
