import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesUpdateManyMutationInputObjectSchema as dictArticlesUpdateManyMutationInputObjectSchema } from './objects/dictArticlesUpdateManyMutationInput.schema';
import { dictArticlesWhereInputObjectSchema as dictArticlesWhereInputObjectSchema } from './objects/dictArticlesWhereInput.schema';

export const dictArticlesUpdateManySchema: z.ZodType<Prisma.dictArticlesUpdateManyArgs> = z.object({ data: dictArticlesUpdateManyMutationInputObjectSchema, where: dictArticlesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictArticlesUpdateManyArgs>;

export const dictArticlesUpdateManyZodSchema = z.object({ data: dictArticlesUpdateManyMutationInputObjectSchema, where: dictArticlesWhereInputObjectSchema.optional() }).strict();