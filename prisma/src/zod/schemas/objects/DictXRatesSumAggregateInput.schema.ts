import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  XRate: z.literal(true).optional()
}).strict();
export const DictXRatesSumAggregateInputObjectSchema: z.ZodType<Prisma.DictXRatesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictXRatesSumAggregateInputType>;
export const DictXRatesSumAggregateInputObjectZodSchema = makeSchema();
