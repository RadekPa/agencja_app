import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermCreateManyInputObjectSchema as dictAdvTermCreateManyInputObjectSchema } from './objects/dictAdvTermCreateManyInput.schema';

export const dictAdvTermCreateManySchema: z.ZodType<Prisma.dictAdvTermCreateManyArgs> = z.object({ data: z.union([ dictAdvTermCreateManyInputObjectSchema, z.array(dictAdvTermCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictAdvTermCreateManyArgs>;

export const dictAdvTermCreateManyZodSchema = z.object({ data: z.union([ dictAdvTermCreateManyInputObjectSchema, z.array(dictAdvTermCreateManyInputObjectSchema) ]),  }).strict();