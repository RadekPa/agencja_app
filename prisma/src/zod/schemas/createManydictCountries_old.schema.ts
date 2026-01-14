import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountries_oldCreateManyInputObjectSchema as dictCountries_oldCreateManyInputObjectSchema } from './objects/dictCountries_oldCreateManyInput.schema';

export const dictCountries_oldCreateManySchema: z.ZodType<Prisma.dictCountries_oldCreateManyArgs> = z.object({ data: z.union([ dictCountries_oldCreateManyInputObjectSchema, z.array(dictCountries_oldCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictCountries_oldCreateManyArgs>;

export const dictCountries_oldCreateManyZodSchema = z.object({ data: z.union([ dictCountries_oldCreateManyInputObjectSchema, z.array(dictCountries_oldCreateManyInputObjectSchema) ]),  }).strict();