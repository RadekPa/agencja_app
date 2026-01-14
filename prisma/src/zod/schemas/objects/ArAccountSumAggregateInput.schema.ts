import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AccountID: z.literal(true).optional()
}).strict();
export const ArAccountSumAggregateInputObjectSchema: z.ZodType<Prisma.ArAccountSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ArAccountSumAggregateInputType>;
export const ArAccountSumAggregateInputObjectZodSchema = makeSchema();
