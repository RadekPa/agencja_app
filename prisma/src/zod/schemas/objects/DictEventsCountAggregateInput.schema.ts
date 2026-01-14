import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  EventCode: z.literal(true).optional(),
  EventDesc: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictEventsCountAggregateInputObjectSchema: z.ZodType<Prisma.DictEventsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictEventsCountAggregateInputType>;
export const DictEventsCountAggregateInputObjectZodSchema = makeSchema();
