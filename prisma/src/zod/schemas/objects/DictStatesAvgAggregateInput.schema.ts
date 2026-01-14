import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  StateID: z.literal(true).optional(),
  CountryID: z.literal(true).optional()
}).strict();
export const DictStatesAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictStatesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictStatesAvgAggregateInputType>;
export const DictStatesAvgAggregateInputObjectZodSchema = makeSchema();
