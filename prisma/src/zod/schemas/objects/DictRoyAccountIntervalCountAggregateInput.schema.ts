import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.literal(true).optional(),
  RoyAccountIntervalDesc: z.literal(true).optional(),
  IntervalAbb: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const DictRoyAccountIntervalCountAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyAccountIntervalCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyAccountIntervalCountAggregateInputType>;
export const DictRoyAccountIntervalCountAggregateInputObjectZodSchema = makeSchema();
