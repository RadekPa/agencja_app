import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyAccountIntervalCreateManyInputObjectSchema as dictRoyAccountIntervalCreateManyInputObjectSchema } from './objects/dictRoyAccountIntervalCreateManyInput.schema';

export const dictRoyAccountIntervalCreateManySchema: z.ZodType<Prisma.dictRoyAccountIntervalCreateManyArgs> = z.object({ data: z.union([ dictRoyAccountIntervalCreateManyInputObjectSchema, z.array(dictRoyAccountIntervalCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalCreateManyArgs>;

export const dictRoyAccountIntervalCreateManyZodSchema = z.object({ data: z.union([ dictRoyAccountIntervalCreateManyInputObjectSchema, z.array(dictRoyAccountIntervalCreateManyInputObjectSchema) ]),  }).strict();