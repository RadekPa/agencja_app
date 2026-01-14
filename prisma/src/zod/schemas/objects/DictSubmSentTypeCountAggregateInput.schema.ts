import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.literal(true).optional(),
  SubmSentType: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictSubmSentTypeCountAggregateInputObjectSchema: z.ZodType<Prisma.DictSubmSentTypeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictSubmSentTypeCountAggregateInputType>;
export const DictSubmSentTypeCountAggregateInputObjectZodSchema = makeSchema();
