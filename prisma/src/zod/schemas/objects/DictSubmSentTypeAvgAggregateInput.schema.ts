import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.literal(true).optional()
}).strict();
export const DictSubmSentTypeAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictSubmSentTypeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictSubmSentTypeAvgAggregateInputType>;
export const DictSubmSentTypeAvgAggregateInputObjectZodSchema = makeSchema();
