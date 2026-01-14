import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesSelectObjectSchema as dictArticlesSelectObjectSchema } from './objects/dictArticlesSelect.schema';
import { dictArticlesIncludeObjectSchema as dictArticlesIncludeObjectSchema } from './objects/dictArticlesInclude.schema';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './objects/dictArticlesWhereUniqueInput.schema';

export const dictArticlesFindUniqueSchema: z.ZodType<Prisma.dictArticlesFindUniqueArgs> = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), where: dictArticlesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictArticlesFindUniqueArgs>;

export const dictArticlesFindUniqueZodSchema = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), where: dictArticlesWhereUniqueInputObjectSchema }).strict();