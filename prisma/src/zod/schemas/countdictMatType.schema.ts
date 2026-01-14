import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeOrderByWithRelationInputObjectSchema as dictMatTypeOrderByWithRelationInputObjectSchema } from './objects/dictMatTypeOrderByWithRelationInput.schema';
import { dictMatTypeWhereInputObjectSchema as dictMatTypeWhereInputObjectSchema } from './objects/dictMatTypeWhereInput.schema';
import { dictMatTypeWhereUniqueInputObjectSchema as dictMatTypeWhereUniqueInputObjectSchema } from './objects/dictMatTypeWhereUniqueInput.schema';
import { DictMatTypeCountAggregateInputObjectSchema as DictMatTypeCountAggregateInputObjectSchema } from './objects/DictMatTypeCountAggregateInput.schema';

export const dictMatTypeCountSchema: z.ZodType<Prisma.dictMatTypeCountArgs> = z.object({ orderBy: z.union([dictMatTypeOrderByWithRelationInputObjectSchema, dictMatTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMatTypeWhereInputObjectSchema.optional(), cursor: dictMatTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictMatTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictMatTypeCountArgs>;

export const dictMatTypeCountZodSchema = z.object({ orderBy: z.union([dictMatTypeOrderByWithRelationInputObjectSchema, dictMatTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictMatTypeWhereInputObjectSchema.optional(), cursor: dictMatTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictMatTypeCountAggregateInputObjectSchema ]).optional() }).strict();