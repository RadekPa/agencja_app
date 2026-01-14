import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountOrderByWithRelationInputObjectSchema as ArAccountOrderByWithRelationInputObjectSchema } from './objects/ArAccountOrderByWithRelationInput.schema';
import { ArAccountWhereInputObjectSchema as ArAccountWhereInputObjectSchema } from './objects/ArAccountWhereInput.schema';
import { ArAccountWhereUniqueInputObjectSchema as ArAccountWhereUniqueInputObjectSchema } from './objects/ArAccountWhereUniqueInput.schema';
import { ArAccountCountAggregateInputObjectSchema as ArAccountCountAggregateInputObjectSchema } from './objects/ArAccountCountAggregateInput.schema';

export const ArAccountCountSchema: z.ZodType<Prisma.ArAccountCountArgs> = z.object({ orderBy: z.union([ArAccountOrderByWithRelationInputObjectSchema, ArAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArAccountWhereInputObjectSchema.optional(), cursor: ArAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArAccountCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ArAccountCountArgs>;

export const ArAccountCountZodSchema = z.object({ orderBy: z.union([ArAccountOrderByWithRelationInputObjectSchema, ArAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArAccountWhereInputObjectSchema.optional(), cursor: ArAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArAccountCountAggregateInputObjectSchema ]).optional() }).strict();