import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RepModeID: z.literal(true).optional()
}).strict();
export const DictRepModesSumAggregateInputObjectSchema: z.ZodType<Prisma.DictRepModesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRepModesSumAggregateInputType>;
export const DictRepModesSumAggregateInputObjectZodSchema = makeSchema();
