import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitMainClassCreateManyInputObjectSchema as dictTitMainClassCreateManyInputObjectSchema } from './objects/dictTitMainClassCreateManyInput.schema';

export const dictTitMainClassCreateManySchema: z.ZodType<Prisma.dictTitMainClassCreateManyArgs> = z.object({ data: z.union([ dictTitMainClassCreateManyInputObjectSchema, z.array(dictTitMainClassCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictTitMainClassCreateManyArgs>;

export const dictTitMainClassCreateManyZodSchema = z.object({ data: z.union([ dictTitMainClassCreateManyInputObjectSchema, z.array(dictTitMainClassCreateManyInputObjectSchema) ]),  }).strict();