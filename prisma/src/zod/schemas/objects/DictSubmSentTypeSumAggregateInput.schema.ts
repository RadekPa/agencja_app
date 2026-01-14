import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  SubmSentTypeID: z.literal(true).optional()
}).strict();
export const DictSubmSentTypeSumAggregateInputObjectSchema: z.ZodType<Prisma.DictSubmSentTypeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictSubmSentTypeSumAggregateInputType>;
export const DictSubmSentTypeSumAggregateInputObjectZodSchema = makeSchema();
