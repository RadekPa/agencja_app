import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesWhereInputObjectSchema as dictArticlesWhereInputObjectSchema } from './objects/dictArticlesWhereInput.schema';

export const dictArticlesDeleteManySchema: z.ZodType<Prisma.dictArticlesDeleteManyArgs> = z.object({ where: dictArticlesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictArticlesDeleteManyArgs>;

export const dictArticlesDeleteManyZodSchema = z.object({ where: dictArticlesWhereInputObjectSchema.optional() }).strict();