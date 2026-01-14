import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyPriceTypeCreateManyInputObjectSchema as dictRoyPriceTypeCreateManyInputObjectSchema } from './objects/dictRoyPriceTypeCreateManyInput.schema';

export const dictRoyPriceTypeCreateManySchema: z.ZodType<Prisma.dictRoyPriceTypeCreateManyArgs> = z.object({ data: z.union([ dictRoyPriceTypeCreateManyInputObjectSchema, z.array(dictRoyPriceTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictRoyPriceTypeCreateManyArgs>;

export const dictRoyPriceTypeCreateManyZodSchema = z.object({ data: z.union([ dictRoyPriceTypeCreateManyInputObjectSchema, z.array(dictRoyPriceTypeCreateManyInputObjectSchema) ]),  }).strict();