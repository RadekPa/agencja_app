import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.literal(true).optional(),
  RoyAccountIntervalDesc: z.literal(true).optional(),
  IntervalAbb: z.literal(true).optional()
}).strict();
export const DictRoyAccountIntervalMinAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyAccountIntervalMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyAccountIntervalMinAggregateInputType>;
export const DictRoyAccountIntervalMinAggregateInputObjectZodSchema = makeSchema();
