import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplyOrderByWithRelationInputObjectSchema as ArApplyOrderByWithRelationInputObjectSchema } from './objects/ArApplyOrderByWithRelationInput.schema';
import { ArApplyWhereInputObjectSchema as ArApplyWhereInputObjectSchema } from './objects/ArApplyWhereInput.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './objects/ArApplyWhereUniqueInput.schema';
import { ArApplyCountAggregateInputObjectSchema as ArApplyCountAggregateInputObjectSchema } from './objects/ArApplyCountAggregateInput.schema';
import { ArApplyMinAggregateInputObjectSchema as ArApplyMinAggregateInputObjectSchema } from './objects/ArApplyMinAggregateInput.schema';
import { ArApplyMaxAggregateInputObjectSchema as ArApplyMaxAggregateInputObjectSchema } from './objects/ArApplyMaxAggregateInput.schema';
import { ArApplyAvgAggregateInputObjectSchema as ArApplyAvgAggregateInputObjectSchema } from './objects/ArApplyAvgAggregateInput.schema';
import { ArApplySumAggregateInputObjectSchema as ArApplySumAggregateInputObjectSchema } from './objects/ArApplySumAggregateInput.schema';

export const ArApplyAggregateSchema: z.ZodType<Prisma.ArApplyAggregateArgs> = z.object({ orderBy: z.union([ArApplyOrderByWithRelationInputObjectSchema, ArApplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArApplyWhereInputObjectSchema.optional(), cursor: ArApplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ArApplyCountAggregateInputObjectSchema ]).optional(), _min: ArApplyMinAggregateInputObjectSchema.optional(), _max: ArApplyMaxAggregateInputObjectSchema.optional(), _avg: ArApplyAvgAggregateInputObjectSchema.optional(), _sum: ArApplySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArApplyAggregateArgs>;

export const ArApplyAggregateZodSchema = z.object({ orderBy: z.union([ArApplyOrderByWithRelationInputObjectSchema, ArApplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArApplyWhereInputObjectSchema.optional(), cursor: ArApplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ArApplyCountAggregateInputObjectSchema ]).optional(), _min: ArApplyMinAggregateInputObjectSchema.optional(), _max: ArApplyMaxAggregateInputObjectSchema.optional(), _avg: ArApplyAvgAggregateInputObjectSchema.optional(), _sum: ArApplySumAggregateInputObjectSchema.optional() }).strict();