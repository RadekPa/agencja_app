import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassCreateManyInputObjectSchema as dictTitSubClassCreateManyInputObjectSchema } from './objects/dictTitSubClassCreateManyInput.schema';

export const dictTitSubClassCreateManySchema: z.ZodType<Prisma.dictTitSubClassCreateManyArgs> = z.object({ data: z.union([ dictTitSubClassCreateManyInputObjectSchema, z.array(dictTitSubClassCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassCreateManyArgs>;

export const dictTitSubClassCreateManyZodSchema = z.object({ data: z.union([ dictTitSubClassCreateManyInputObjectSchema, z.array(dictTitSubClassCreateManyInputObjectSchema) ]),  }).strict();