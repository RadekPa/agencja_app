import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  EventCode: z.literal(true).optional(),
  EventDesc: z.literal(true).optional()
}).strict();
export const DictEventsMinAggregateInputObjectSchema: z.ZodType<Prisma.DictEventsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictEventsMinAggregateInputType>;
export const DictEventsMinAggregateInputObjectZodSchema = makeSchema();
