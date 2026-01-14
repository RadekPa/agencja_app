import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTypeWhereInputObjectSchema as ArTypeWhereInputObjectSchema } from './objects/ArTypeWhereInput.schema';
import { ArTypeOrderByWithAggregationInputObjectSchema as ArTypeOrderByWithAggregationInputObjectSchema } from './objects/ArTypeOrderByWithAggregationInput.schema';
import { ArTypeScalarWhereWithAggregatesInputObjectSchema as ArTypeScalarWhereWithAggregatesInputObjectSchema } from './objects/ArTypeScalarWhereWithAggregatesInput.schema';
import { ArTypeScalarFieldEnumSchema } from './enums/ArTypeScalarFieldEnum.schema';
import { ArTypeCountAggregateInputObjectSchema as ArTypeCountAggregateInputObjectSchema } from './objects/ArTypeCountAggregateInput.schema';
import { ArTypeMinAggregateInputObjectSchema as ArTypeMinAggregateInputObjectSchema } from './objects/ArTypeMinAggregateInput.schema';
import { ArTypeMaxAggregateInputObjectSchema as ArTypeMaxAggregateInputObjectSchema } from './objects/ArTypeMaxAggregateInput.schema';

export const ArTypeGroupBySchema: z.ZodType<Prisma.ArTypeGroupByArgs> = z.object({ where: ArTypeWhereInputObjectSchema.optional(), orderBy: z.union([ArTypeOrderByWithAggregationInputObjectSchema, ArTypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ArTypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ArTypeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ArTypeCountAggregateInputObjectSchema ]).optional(), _min: ArTypeMinAggregateInputObjectSchema.optional(), _max: ArTypeMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTypeGroupByArgs>;

export const ArTypeGroupByZodSchema = z.object({ where: ArTypeWhereInputObjectSchema.optional(), orderBy: z.union([ArTypeOrderByWithAggregationInputObjectSchema, ArTypeOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ArTypeScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ArTypeScalarFieldEnumSchema), _count: z.union([ z.literal(true), ArTypeCountAggregateInputObjectSchema ]).optional(), _min: ArTypeMinAggregateInputObjectSchema.optional(), _max: ArTypeMaxAggregateInputObjectSchema.optional() }).strict();