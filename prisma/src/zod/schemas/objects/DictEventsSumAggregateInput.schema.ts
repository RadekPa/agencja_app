import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  EventCode: z.literal(true).optional()
}).strict();
export const DictEventsSumAggregateInputObjectSchema: z.ZodType<Prisma.DictEventsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictEventsSumAggregateInputType>;
export const DictEventsSumAggregateInputObjectZodSchema = makeSchema();
