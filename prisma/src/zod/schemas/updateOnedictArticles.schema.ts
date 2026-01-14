import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesSelectObjectSchema as dictArticlesSelectObjectSchema } from './objects/dictArticlesSelect.schema';
import { dictArticlesIncludeObjectSchema as dictArticlesIncludeObjectSchema } from './objects/dictArticlesInclude.schema';
import { dictArticlesUpdateInputObjectSchema as dictArticlesUpdateInputObjectSchema } from './objects/dictArticlesUpdateInput.schema';
import { dictArticlesUncheckedUpdateInputObjectSchema as dictArticlesUncheckedUpdateInputObjectSchema } from './objects/dictArticlesUncheckedUpdateInput.schema';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './objects/dictArticlesWhereUniqueInput.schema';

export const dictArticlesUpdateOneSchema: z.ZodType<Prisma.dictArticlesUpdateArgs> = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), data: z.union([dictArticlesUpdateInputObjectSchema, dictArticlesUncheckedUpdateInputObjectSchema]), where: dictArticlesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictArticlesUpdateArgs>;

export const dictArticlesUpdateOneZodSchema = z.object({ select: dictArticlesSelectObjectSchema.optional(), include: dictArticlesIncludeObjectSchema.optional(), data: z.union([dictArticlesUpdateInputObjectSchema, dictArticlesUncheckedUpdateInputObjectSchema]), where: dictArticlesWhereUniqueInputObjectSchema }).strict();