import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.literal(true).optional(),
  CountryDesc: z.literal(true).optional(),
  CountryPL: z.literal(true).optional(),
  Tax: z.literal(true).optional(),
  Code: z.literal(true).optional(),
  EU: z.literal(true).optional()
}).strict();
export const DictCountriesMinAggregateInputObjectSchema: z.ZodType<Prisma.DictCountriesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DictCountriesMinAggregateInputType>;
export const DictCountriesMinAggregateInputObjectZodSchema = makeSchema();
