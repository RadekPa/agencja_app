import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCountriesCreateManyInputObjectSchema as dictCountriesCreateManyInputObjectSchema } from './objects/dictCountriesCreateManyInput.schema';

export const dictCountriesCreateManySchema: z.ZodType<Prisma.dictCountriesCreateManyArgs> = z.object({ data: z.union([ dictCountriesCreateManyInputObjectSchema, z.array(dictCountriesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictCountriesCreateManyArgs>;

export const dictCountriesCreateManyZodSchema = z.object({ data: z.union([ dictCountriesCreateManyInputObjectSchema, z.array(dictCountriesCreateManyInputObjectSchema) ]),  }).strict();