import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRightsFormOrderByWithRelationInputObjectSchema as dictRightsFormOrderByWithRelationInputObjectSchema } from './objects/dictRightsFormOrderByWithRelationInput.schema';
import { dictRightsFormWhereInputObjectSchema as dictRightsFormWhereInputObjectSchema } from './objects/dictRightsFormWhereInput.schema';
import { dictRightsFormWhereUniqueInputObjectSchema as dictRightsFormWhereUniqueInputObjectSchema } from './objects/dictRightsFormWhereUniqueInput.schema';
import { DictRightsFormCountAggregateInputObjectSchema as DictRightsFormCountAggregateInputObjectSchema } from './objects/DictRightsFormCountAggregateInput.schema';

export const dictRightsFormCountSchema: z.ZodType<Prisma.dictRightsFormCountArgs> = z.object({ orderBy: z.union([dictRightsFormOrderByWithRelationInputObjectSchema, dictRightsFormOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRightsFormWhereInputObjectSchema.optional(), cursor: dictRightsFormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictRightsFormCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRightsFormCountArgs>;

export const dictRightsFormCountZodSchema = z.object({ orderBy: z.union([dictRightsFormOrderByWithRelationInputObjectSchema, dictRightsFormOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRightsFormWhereInputObjectSchema.optional(), cursor: dictRightsFormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictRightsFormCountAggregateInputObjectSchema ]).optional() }).strict();