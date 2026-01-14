import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeOrderByWithRelationInputObjectSchema as lkpPayTypeOrderByWithRelationInputObjectSchema } from './objects/lkpPayTypeOrderByWithRelationInput.schema';
import { lkpPayTypeWhereInputObjectSchema as lkpPayTypeWhereInputObjectSchema } from './objects/lkpPayTypeWhereInput.schema';
import { lkpPayTypeWhereUniqueInputObjectSchema as lkpPayTypeWhereUniqueInputObjectSchema } from './objects/lkpPayTypeWhereUniqueInput.schema';
import { LkpPayTypeCountAggregateInputObjectSchema as LkpPayTypeCountAggregateInputObjectSchema } from './objects/LkpPayTypeCountAggregateInput.schema';

export const lkpPayTypeCountSchema: z.ZodType<Prisma.lkpPayTypeCountArgs> = z.object({ orderBy: z.union([lkpPayTypeOrderByWithRelationInputObjectSchema, lkpPayTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: lkpPayTypeWhereInputObjectSchema.optional(), cursor: lkpPayTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LkpPayTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeCountArgs>;

export const lkpPayTypeCountZodSchema = z.object({ orderBy: z.union([lkpPayTypeOrderByWithRelationInputObjectSchema, lkpPayTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: lkpPayTypeWhereInputObjectSchema.optional(), cursor: lkpPayTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LkpPayTypeCountAggregateInputObjectSchema ]).optional() }).strict();