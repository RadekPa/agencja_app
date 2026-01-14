import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesCreateManyInputObjectSchema as dictXRatesCreateManyInputObjectSchema } from './objects/dictXRatesCreateManyInput.schema';

export const dictXRatesCreateManySchema: z.ZodType<Prisma.dictXRatesCreateManyArgs> = z.object({ data: z.union([ dictXRatesCreateManyInputObjectSchema, z.array(dictXRatesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictXRatesCreateManyArgs>;

export const dictXRatesCreateManyZodSchema = z.object({ data: z.union([ dictXRatesCreateManyInputObjectSchema, z.array(dictXRatesCreateManyInputObjectSchema) ]),  }).strict();