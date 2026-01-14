import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesCreateManyInputObjectSchema as dictStatesCreateManyInputObjectSchema } from './objects/dictStatesCreateManyInput.schema';

export const dictStatesCreateManySchema: z.ZodType<Prisma.dictStatesCreateManyArgs> = z.object({ data: z.union([ dictStatesCreateManyInputObjectSchema, z.array(dictStatesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictStatesCreateManyArgs>;

export const dictStatesCreateManyZodSchema = z.object({ data: z.union([ dictStatesCreateManyInputObjectSchema, z.array(dictStatesCreateManyInputObjectSchema) ]),  }).strict();