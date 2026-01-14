import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeOrderByWithRelationInputObjectSchema as ArTypeOrderByWithRelationInputObjectSchema } from './objects/ArTypeOrderByWithRelationInput.schema';
import { ArTypeWhereInputObjectSchema as ArTypeWhereInputObjectSchema } from './objects/ArTypeWhereInput.schema';
import { ArTypeWhereUniqueInputObjectSchema as ArTypeWhereUniqueInputObjectSchema } from './objects/ArTypeWhereUniqueInput.schema';
import { ArTypeCountAggregateInputObjectSchema as ArTypeCountAggregateInputObjectSchema } from './objects/ArTypeCountAggregateInput.schema';

export const ArTypeCountSchema: z.ZodType<Prisma.ArTypeCountArgs> = z.object({ orderBy: z.union([ArTypeOrderByWithRelationInputObjectSchema, ArTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTypeWhereInputObjectSchema.optional(), cursor: ArTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTypeCountArgs>;

export const ArTypeCountZodSchema = z.object({ orderBy: z.union([ArTypeOrderByWithRelationInputObjectSchema, ArTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTypeWhereInputObjectSchema.optional(), cursor: ArTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArTypeCountAggregateInputObjectSchema ]).optional() }).strict();