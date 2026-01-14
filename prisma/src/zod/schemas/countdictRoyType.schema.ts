import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyTypeOrderByWithRelationInputObjectSchema as dictRoyTypeOrderByWithRelationInputObjectSchema } from './objects/dictRoyTypeOrderByWithRelationInput.schema';
import { dictRoyTypeWhereInputObjectSchema as dictRoyTypeWhereInputObjectSchema } from './objects/dictRoyTypeWhereInput.schema';
import { dictRoyTypeWhereUniqueInputObjectSchema as dictRoyTypeWhereUniqueInputObjectSchema } from './objects/dictRoyTypeWhereUniqueInput.schema';
import { DictRoyTypeCountAggregateInputObjectSchema as DictRoyTypeCountAggregateInputObjectSchema } from './objects/DictRoyTypeCountAggregateInput.schema';

export const dictRoyTypeCountSchema: z.ZodType<Prisma.dictRoyTypeCountArgs> = z.object({ orderBy: z.union([dictRoyTypeOrderByWithRelationInputObjectSchema, dictRoyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyTypeWhereInputObjectSchema.optional(), cursor: dictRoyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictRoyTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRoyTypeCountArgs>;

export const dictRoyTypeCountZodSchema = z.object({ orderBy: z.union([dictRoyTypeOrderByWithRelationInputObjectSchema, dictRoyTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRoyTypeWhereInputObjectSchema.optional(), cursor: dictRoyTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictRoyTypeCountAggregateInputObjectSchema ]).optional() }).strict();