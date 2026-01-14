import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesCreateManyInputObjectSchema as dictArticlesCreateManyInputObjectSchema } from './objects/dictArticlesCreateManyInput.schema';

export const dictArticlesCreateManySchema: z.ZodType<Prisma.dictArticlesCreateManyArgs> = z.object({ data: z.union([ dictArticlesCreateManyInputObjectSchema, z.array(dictArticlesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictArticlesCreateManyArgs>;

export const dictArticlesCreateManyZodSchema = z.object({ data: z.union([ dictArticlesCreateManyInputObjectSchema, z.array(dictArticlesCreateManyInputObjectSchema) ]),  }).strict();