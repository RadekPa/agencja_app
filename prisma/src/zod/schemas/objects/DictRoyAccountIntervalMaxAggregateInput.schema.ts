import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.literal(true).optional(),
  RoyAccountIntervalDesc: z.literal(true).optional(),
  IntervalAbb: z.literal(true).optional()
}).strict();
export const DictRoyAccountIntervalMaxAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyAccountIntervalMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyAccountIntervalMaxAggregateInputType>;
export const DictRoyAccountIntervalMaxAggregateInputObjectZodSchema = makeSchema();
