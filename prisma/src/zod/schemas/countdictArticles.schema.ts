import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictArticlesOrderByWithRelationInputObjectSchema as dictArticlesOrderByWithRelationInputObjectSchema } from './objects/dictArticlesOrderByWithRelationInput.schema';
import { dictArticlesWhereInputObjectSchema as dictArticlesWhereInputObjectSchema } from './objects/dictArticlesWhereInput.schema';
import { dictArticlesWhereUniqueInputObjectSchema as dictArticlesWhereUniqueInputObjectSchema } from './objects/dictArticlesWhereUniqueInput.schema';
import { DictArticlesCountAggregateInputObjectSchema as DictArticlesCountAggregateInputObjectSchema } from './objects/DictArticlesCountAggregateInput.schema';

export const dictArticlesCountSchema: z.ZodType<Prisma.dictArticlesCountArgs> = z.object({ orderBy: z.union([dictArticlesOrderByWithRelationInputObjectSchema, dictArticlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictArticlesWhereInputObjectSchema.optional(), cursor: dictArticlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictArticlesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictArticlesCountArgs>;

export const dictArticlesCountZodSchema = z.object({ orderBy: z.union([dictArticlesOrderByWithRelationInputObjectSchema, dictArticlesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictArticlesWhereInputObjectSchema.optional(), cursor: dictArticlesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictArticlesCountAggregateInputObjectSchema ]).optional() }).strict();