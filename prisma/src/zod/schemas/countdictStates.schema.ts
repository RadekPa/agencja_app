import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesOrderByWithRelationInputObjectSchema as dictStatesOrderByWithRelationInputObjectSchema } from './objects/dictStatesOrderByWithRelationInput.schema';
import { dictStatesWhereInputObjectSchema as dictStatesWhereInputObjectSchema } from './objects/dictStatesWhereInput.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './objects/dictStatesWhereUniqueInput.schema';
import { DictStatesCountAggregateInputObjectSchema as DictStatesCountAggregateInputObjectSchema } from './objects/DictStatesCountAggregateInput.schema';

export const dictStatesCountSchema: z.ZodType<Prisma.dictStatesCountArgs> = z.object({ orderBy: z.union([dictStatesOrderByWithRelationInputObjectSchema, dictStatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictStatesWhereInputObjectSchema.optional(), cursor: dictStatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictStatesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictStatesCountArgs>;

export const dictStatesCountZodSchema = z.object({ orderBy: z.union([dictStatesOrderByWithRelationInputObjectSchema, dictStatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictStatesWhereInputObjectSchema.optional(), cursor: dictStatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictStatesCountAggregateInputObjectSchema ]).optional() }).strict();