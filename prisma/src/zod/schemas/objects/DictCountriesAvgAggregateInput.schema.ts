import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.literal(true).optional(),
  Tax: z.literal(true).optional()
}).strict();
export const DictCountriesAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictCountriesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountriesAvgAggregateInputType>;
export const DictCountriesAvgAggregateInputObjectZodSchema = makeSchema();
