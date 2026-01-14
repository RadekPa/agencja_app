import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.boolean().optional(),
  CountryDesc: z.boolean().optional(),
  CountryPL: z.boolean().optional(),
  Tax: z.boolean().optional(),
  Code: z.boolean().optional(),
  EU: z.boolean().optional()
}).strict();
export const dictCountriesSelectObjectSchema: z.ZodType<Prisma.dictCountriesSelect> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesSelect>;
export const dictCountriesSelectObjectZodSchema = makeSchema();
