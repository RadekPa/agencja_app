import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  RoyAccountIntervalID: z.literal(true).optional()
}).strict();
export const DictRoyAccountIntervalSumAggregateInputObjectSchema: z.ZodType<Prisma.DictRoyAccountIntervalSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictRoyAccountIntervalSumAggregateInputType>;
export const DictRoyAccountIntervalSumAggregateInputObjectZodSchema = makeSchema();
