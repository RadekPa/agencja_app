import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.literal(true).optional(),
  Tax: z.literal(true).optional()
}).strict();
export const DictCountriesSumAggregateInputObjectSchema: z.ZodType<Prisma.DictCountriesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountriesSumAggregateInputType>;
export const DictCountriesSumAggregateInputObjectZodSchema = makeSchema();
