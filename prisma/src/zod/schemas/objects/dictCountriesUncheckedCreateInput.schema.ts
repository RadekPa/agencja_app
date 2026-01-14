import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.number().int().optional(),
  CountryDesc: z.string().optional().nullable(),
  CountryPL: z.string().optional().nullable(),
  Tax: z.number().optional().nullable(),
  Code: z.string().max(255).optional().nullable(),
  EU: z.string().max(10).optional().nullable()
}).strict();
export const dictCountriesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.dictCountriesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesUncheckedCreateInput>;
export const dictCountriesUncheckedCreateInputObjectZodSchema = makeSchema();
