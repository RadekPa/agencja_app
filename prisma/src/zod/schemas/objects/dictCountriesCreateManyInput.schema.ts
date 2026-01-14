import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryDesc: z.string().optional().nullable(),
  CountryPL: z.string().optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().max(255).optional().nullable(),
  EU: z.string().max(10).optional().nullable()
}).strict();
export const dictCountriesCreateManyInputObjectSchema: z.ZodType<Prisma.dictCountriesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesCreateManyInput>;
export const dictCountriesCreateManyInputObjectZodSchema = makeSchema();
