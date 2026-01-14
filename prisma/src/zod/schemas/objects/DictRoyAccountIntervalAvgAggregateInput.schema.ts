import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.literal(true).optional()
}).strict();
export const DictRoyAccountIntervalAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyAccountIntervalAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyAccountIntervalAvgAggregateInputType>;
export const DictRoyAccountIntervalAvgAggregateInputObjectZodSchema = makeSchema();
