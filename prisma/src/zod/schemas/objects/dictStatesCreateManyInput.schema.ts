import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  CountryID: z.number().int().optional().nullable(),
  StateAbb: z.string().max(2),
  StateName: z.string().max(30)
}).strict();
export const dictStatesCreateManyInputObjectSchema: z.ZodType<Prisma.dictStatesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.dictStatesCreateManyInput>;
export const dictStatesCreateManyInputObjectZodSchema = makeSchema();
