import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.number().int().optional()
}).strict();
export const dictCountries_oldWhereUniqueInputObjectSchema: z.ZodType<Prisma.dictCountries_oldWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCountries_oldWhereUniqueInput>;
export const dictCountries_oldWhereUniqueInputObjectZodSchema = makeSchema();
