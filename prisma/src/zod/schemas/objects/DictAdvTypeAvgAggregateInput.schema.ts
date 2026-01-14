import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  AdvTypeId: z.literal(true).optional()
}).strict();
export const DictAdvTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictAdvTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictAdvTypeAvgAggregateInputType>;
export const DictAdvTypeAvgAggregateInputObjectZodSchema = makeSchema();
