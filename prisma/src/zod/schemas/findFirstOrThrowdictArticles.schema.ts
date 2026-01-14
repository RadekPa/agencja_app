import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesIncludeObjectSchema as dictArticlesIncludeObjectSchema } from './objects/dictArticlesInclude.schema';
import { dictArticlesOrderByWithRelationInputObjectSchema as dictArticlesOrderByWithRelationInputObjectSchema } from './objects/dictArticlesOrderByWithRelationInput.schema';
import { dictArticlesWhereInputObjectSchema as dictArticlesWhereInputObjectSchema } from './objects/dictArticlesWhereInput.schema';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './objects/dictArticlesWhereUniqueInput.schema';
import { DictArticlesScalarFieldEnumSchema } from './enums/DictArticlesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const dictArticlesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.dictArticlesSelect> = z.object({
    Article: z.boolean().optional(),
    LangAbb: z.boolean().optional(),
    dictLanguages: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.dictArticlesSelect>;

export const dictArticlesFindFirstOrThrowSelectZodSchema = z.object({
    Article: z.boolean().optional(),
    LangAbb: z.boolean().optional(),
    dictLanguages: z.boolean().optional()
  }).strict();

export const dictArticlesFindFirstOrThrowSchema: z.ZodType<Prisma.dictArticlesFindFirstOrThrowArgs> = z.object({ select: dictArticlesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictArticlesIncludeObjectSchema.optional()), orderBy: z.union([dictArticlesOrderByWithRelationInputObjectSchema, dictArticlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictArticlesWhereInputObjectSchema.optional(), cursor: dictArticlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictArticlesScalarFieldEnumSchema, DictArticlesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.dictArticlesFindFirstOrThrowArgs>;

export const dictArticlesFindFirstOrThrowZodSchema = z.object({ select: dictArticlesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => dictArticlesIncludeObjectSchema.optional()), orderBy: z.union([dictArticlesOrderByWithRelationInputObjectSchema, dictArticlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictArticlesWhereInputObjectSchema.optional(), cursor: dictArticlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DictArticlesScalarFieldEnumSchema, DictArticlesScalarFieldEnumSchema.array()]).optional() }).strict();