import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.literal(true).optional(),
  SubmSentType: z.literal(true).optional()
}).strict();
export const DictSubmSentTypeMinAggregateInputObjectSchema: z.ZodType<Prisma.DictSubmSentTypeMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictSubmSentTypeMinAggregateInputType>;
export const DictSubmSentTypeMinAggregateInputObjectZodSchema = makeSchema();
