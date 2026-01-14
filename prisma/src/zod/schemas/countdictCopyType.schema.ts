import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCopyTypeOrderByWithRelationInputObjectSchema as dictCopyTypeOrderByWithRelationInputObjectSchema } from './objects/dictCopyTypeOrderByWithRelationInput.schema';
import { dictCopyTypeWhereInputObjectSchema as dictCopyTypeWhereInputObjectSchema } from './objects/dictCopyTypeWhereInput.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './objects/dictCopyTypeWhereUniqueInput.schema';
import { DictCopyTypeCountAggregateInputObjectSchema as DictCopyTypeCountAggregateInputObjectSchema } from './objects/DictCopyTypeCountAggregateInput.schema';

export const dictCopyTypeCountSchema: z.ZodType<Prisma.dictCopyTypeCountArgs> = z.object({ orderBy: z.union([dictCopyTypeOrderByWithRelationInputObjectSchema, dictCopyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCopyTypeWhereInputObjectSchema.optional(), cursor: dictCopyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCopyTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCopyTypeCountArgs>;

export const dictCopyTypeCountZodSchema = z.object({ orderBy: z.union([dictCopyTypeOrderByWithRelationInputObjectSchema, dictCopyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCopyTypeWhereInputObjectSchema.optional(), cursor: dictCopyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCopyTypeCountAggregateInputObjectSchema ]).optional() }).strict();