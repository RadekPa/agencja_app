import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.literal(true).optional(),
  SubmSentType: z.literal(true).optional()
}).strict();
export const DictSubmSentTypeMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictSubmSentTypeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictSubmSentTypeMaxAggregateInputType>;
export const DictSubmSentTypeMaxAggregateInputObjectZodSchema = makeSchema();
