import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  EventCode: z.literal(true).optional(),
  EventDesc: z.literal(true).optional()
}).strict();
export const DictEventsMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictEventsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictEventsMaxAggregateInputType>;
export const DictEventsMaxAggregateInputObjectZodSchema = makeSchema();
