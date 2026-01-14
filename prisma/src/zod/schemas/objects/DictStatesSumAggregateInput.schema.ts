import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  StateID: z.literal(true).optional(),
  CountryID: z.literal(true).optional()
}).strict();
export const DictStatesSumAggregateInputObjectSchema: z.ZodType<Prisma.DictStatesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictStatesSumAggregateInputType>;
export const DictStatesSumAggregateInputObjectZodSchema = makeSchema();
