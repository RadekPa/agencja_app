import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dbo_LocalUserOrderByWithRelationInputObjectSchema as dbo_LocalUserOrderByWithRelationInputObjectSchema } from './objects/dbo_LocalUserOrderByWithRelationInput.schema';
import { dbo_LocalUserWhereInputObjectSchema as dbo_LocalUserWhereInputObjectSchema } from './objects/dbo_LocalUserWhereInput.schema';
import { dbo_LocalUserWhereUniqueInputObjectSchema as dbo_LocalUserWhereUniqueInputObjectSchema } from './objects/dbo_LocalUserWhereUniqueInput.schema';
import { Dbo_LocalUserCountAggregateInputObjectSchema as Dbo_LocalUserCountAggregateInputObjectSchema } from './objects/Dbo_LocalUserCountAggregateInput.schema';

export const dbo_LocalUserCountSchema: z.ZodType<Prisma.dbo_LocalUserCountArgs> = z.object({ orderBy: z.union([dbo_LocalUserOrderByWithRelationInputObjectSchema, dbo_LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: dbo_LocalUserWhereInputObjectSchema.optional(), cursor: dbo_LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Dbo_LocalUserCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dbo_LocalUserCountArgs>;

export const dbo_LocalUserCountZodSchema = z.object({ orderBy: z.union([dbo_LocalUserOrderByWithRelationInputObjectSchema, dbo_LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: dbo_LocalUserWhereInputObjectSchema.optional(), cursor: dbo_LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Dbo_LocalUserCountAggregateInputObjectSchema ]).optional() }).strict();