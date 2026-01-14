import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeCreateManyInputObjectSchema as dictPriceTypeCreateManyInputObjectSchema } from './objects/dictPriceTypeCreateManyInput.schema';

export const dictPriceTypeCreateManySchema: z.ZodType<Prisma.dictPriceTypeCreateManyArgs> = z.object({ data: z.union([ dictPriceTypeCreateManyInputObjectSchema, z.array(dictPriceTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeCreateManyArgs>;

export const dictPriceTypeCreateManyZodSchema = z.object({ data: z.union([ dictPriceTypeCreateManyInputObjectSchema, z.array(dictPriceTypeCreateManyInputObjectSchema) ]),  }).strict();