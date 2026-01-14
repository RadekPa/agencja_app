import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  StateAbb: z.string().max(2),
  StateName: z.string().max(30)
}).strict();
export const dictStatesCreateManyDictCountries_oldInputObjectSchema: z.ZodType<Prisma.dictStatesCreateManyDictCountries_oldInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateManyDictCountries_oldInput>;
export const dictStatesCreateManyDictCountries_oldInputObjectZodSchema = makeSchema();
