import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplyOrderByWithRelationInputObjectSchema as ArApplyOrderByWithRelationInputObjectSchema } from './objects/ArApplyOrderByWithRelationInput.schema';
import { ArApplyWhereInputObjectSchema as ArApplyWhereInputObjectSchema } from './objects/ArApplyWhereInput.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './objects/ArApplyWhereUniqueInput.schema';
import { ArApplyCountAggregateInputObjectSchema as ArApplyCountAggregateInputObjectSchema } from './objects/ArApplyCountAggregateInput.schema';

export const ArApplyCountSchema: z.ZodType<Prisma.ArApplyCountArgs> = z.object({ orderBy: z.union([ArApplyOrderByWithRelationInputObjectSchema, ArApplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArApplyWhereInputObjectSchema.optional(), cursor: ArApplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArApplyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ArApplyCountArgs>;

export const ArApplyCountZodSchema = z.object({ orderBy: z.union([ArApplyOrderByWithRelationInputObjectSchema, ArApplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArApplyWhereInputObjectSchema.optional(), cursor: ArApplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArApplyCountAggregateInputObjectSchema ]).optional() }).strict();