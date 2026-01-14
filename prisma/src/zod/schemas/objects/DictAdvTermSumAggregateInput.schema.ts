import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTermId: z.literal(true).optional()
}).strict();
export const DictAdvTermSumAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTermSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTermSumAggregateInputType>;
export const DictAdvTermSumAggregateInputObjectZodSchema = makeSchema();
