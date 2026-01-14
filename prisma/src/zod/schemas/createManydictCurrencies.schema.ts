import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesCreateManyInputObjectSchema as dictCurrenciesCreateManyInputObjectSchema } from './objects/dictCurrenciesCreateManyInput.schema';

export const dictCurrenciesCreateManySchema: z.ZodType<Prisma.dictCurrenciesCreateManyArgs> = z.object({ data: z.union([ dictCurrenciesCreateManyInputObjectSchema, z.array(dictCurrenciesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesCreateManyArgs>;

export const dictCurrenciesCreateManyZodSchema = z.object({ data: z.union([ dictCurrenciesCreateManyInputObjectSchema, z.array(dictCurrenciesCreateManyInputObjectSchema) ]),  }).strict();