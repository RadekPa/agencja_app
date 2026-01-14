import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.literal(true).optional(),
  Tax: z.literal(true).optional()
}).strict();
export const DictCountries_oldAvgAggregateInputObjectSchema: z.ZodType<Prisma.DictCountries_oldAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountries_oldAvgAggregateInputType>;
export const DictCountries_oldAvgAggregateInputObjectZodSchema = makeSchema();
