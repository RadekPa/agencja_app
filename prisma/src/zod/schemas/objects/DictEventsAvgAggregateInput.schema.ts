import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  EventCode: z.literal(true).optional()
}).strict();
export const DictEventsAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictEventsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictEventsAvgAggregateInputType>;
export const DictEventsAvgAggregateInputObjectZodSchema = makeSchema();
