import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  country: z.literal(true).optional()
}).strict();
export const CustomerSumAggregateInputObjectSchema: z.ZodType<Prisma.CustomerSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomerSumAggregateInputType>;
export const CustomerSumAggregateInputObjectZodSchema = makeSchema();
