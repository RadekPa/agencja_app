import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.number().int().optional()
}).strict();
export const dictCountriesWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictCountriesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountriesWhereUniqueInput>;
export const dictCountriesWhereUniqueInputObjectZodSchema = makeSchema();
