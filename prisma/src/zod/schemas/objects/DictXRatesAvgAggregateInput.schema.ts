import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  XRate: z.literal(true).optional()
}).strict();
export const DictXRatesAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictXRatesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictXRatesAvgAggregateInputType>;
export const DictXRatesAvgAggregateInputObjectZodSchema = makeSchema();
