import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { LocalUserOrderByWithRelationInputObjectSchema as LocalUserOrderByWithRelationInputObjectSchema } from './objects/LocalUserOrderByWithRelationInput.schema';
import { LocalUserWhereInputObjectSchema as LocalUserWhereInputObjectSchema } from './objects/LocalUserWhereInput.schema';
import { LocalUserWhereUniqueInputObjectSchema as LocalUserWhereUniqueInputObjectSchema } from './objects/LocalUserWhereUniqueInput.schema';
import { LocalUserCountAggregateInputObjectSchema as LocalUserCountAggregateInputObjectSchema } from './objects/LocalUserCountAggregateInput.schema';

export const LocalUserCountSchema: z.ZodType<Prisma.LocalUserCountArgs> = z.object({ orderBy: z.union([LocalUserOrderByWithRelationInputObjectSchema, LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocalUserWhereInputObjectSchema.optional(), cursor: LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LocalUserCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.LocalUserCountArgs>;

export const LocalUserCountZodSchema = z.object({ orderBy: z.union([LocalUserOrderByWithRelationInputObjectSchema, LocalUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: LocalUserWhereInputObjectSchema.optional(), cursor: LocalUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), LocalUserCountAggregateInputObjectSchema ]).optional() }).strict();