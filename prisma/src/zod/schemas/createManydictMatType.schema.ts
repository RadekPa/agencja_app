import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeCreateManyInputObjectSchema as dictMatTypeCreateManyInputObjectSchema } from './objects/dictMatTypeCreateManyInput.schema';

export const dictMatTypeCreateManySchema: z.ZodType<Prisma.dictMatTypeCreateManyArgs> = z.object({ data: z.union([ dictMatTypeCreateManyInputObjectSchema, z.array(dictMatTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictMatTypeCreateManyArgs>;

export const dictMatTypeCreateManyZodSchema = z.object({ data: z.union([ dictMatTypeCreateManyInputObjectSchema, z.array(dictMatTypeCreateManyInputObjectSchema) ]),  }).strict();