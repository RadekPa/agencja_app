import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryDesc: z.string().max(150),
  CountryPL: z.string().max(150).optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().max(10).optional().nullable(),
  EU: z.string().max(1).optional().nullable()
}).strict();
export const dictCountries_oldCreateManyInputObjectSchema: z.ZodType<Prisma.dictCountries_oldCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldCreateManyInput>;
export const dictCountries_oldCreateManyInputObjectZodSchema = makeSchema();
