import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeOrderByWithRelationInputObjectSchema as ArTypeOrderByWithRelationInputObjectSchema } from './objects/ArTypeOrderByWithRelationInput.schema';
import { ArTypeWhereInputObjectSchema as ArTypeWhereInputObjectSchema } from './objects/ArTypeWhereInput.schema';
import { ArTypeWhereUniqueInputObjectSchema as ArTypeWhereUniqueInputObjectSchema } from './objects/ArTypeWhereUniqueInput.schema';
import { ArTypeCountAggregateInputObjectSchema as ArTypeCountAggregateInputObjectSchema } from './objects/ArTypeCountAggregateInput.schema';
import { ArTypeMinAggregateInputObjectSchema as ArTypeMinAggregateInputObjectSchema } from './objects/ArTypeMinAggregateInput.schema';
import { ArTypeMaxAggregateInputObjectSchema as ArTypeMaxAggregateInputObjectSchema } from './objects/ArTypeMaxAggregateInput.schema';

export const ArTypeAggregateSchema: z.ZodType<Prisma.ArTypeAggregateArgs> = z.object({ orderBy: z.union([ArTypeOrderByWithRelationInputObjectSchema, ArTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTypeWhereInputObjectSchema.optional(), cursor: ArTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ArTypeCountAggregateInputObjectSchema ]).optional(), _min: ArTypeMinAggregateInputObjectSchema.optional(), _max: ArTypeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTypeAggregateArgs>;

export const ArTypeAggregateZodSchema = z.object({ orderBy: z.union([ArTypeOrderByWithRelationInputObjectSchema, ArTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTypeWhereInputObjectSchema.optional(), cursor: ArTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ArTypeCountAggregateInputObjectSchema ]).optional(), _min: ArTypeMinAggregateInputObjectSchema.optional(), _max: ArTypeMaxAggregateInputObjectSchema.optional() }).strict();