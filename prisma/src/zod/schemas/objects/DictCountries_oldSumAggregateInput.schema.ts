import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.literal(true).optional(),
  Tax: z.literal(true).optional()
}).strict();
export const DictCountries_oldSumAggregateInputObjectSchema: z.ZodType<Prisma.DictCountries_oldSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountries_oldSumAggregateInputType>;
export const DictCountries_oldSumAggregateInputObjectZodSchema = makeSchema();
