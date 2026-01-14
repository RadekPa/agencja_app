import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatOrderByWithRelationInputObjectSchema as dictCoverFormatOrderByWithRelationInputObjectSchema } from './objects/dictCoverFormatOrderByWithRelationInput.schema';
import { dictCoverFormatWhereInputObjectSchema as dictCoverFormatWhereInputObjectSchema } from './objects/dictCoverFormatWhereInput.schema';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './objects/dictCoverFormatWhereUniqueInput.schema';
import { DictCoverFormatCountAggregateInputObjectSchema as DictCoverFormatCountAggregateInputObjectSchema } from './objects/DictCoverFormatCountAggregateInput.schema';

export const dictCoverFormatCountSchema: z.ZodType<Prisma.dictCoverFormatCountArgs> = z.object({ orderBy: z.union([dictCoverFormatOrderByWithRelationInputObjectSchema, dictCoverFormatOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCoverFormatWhereInputObjectSchema.optional(), cursor: dictCoverFormatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCoverFormatCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatCountArgs>;

export const dictCoverFormatCountZodSchema = z.object({ orderBy: z.union([dictCoverFormatOrderByWithRelationInputObjectSchema, dictCoverFormatOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCoverFormatWhereInputObjectSchema.optional(), cursor: dictCoverFormatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCoverFormatCountAggregateInputObjectSchema ]).optional() }).strict();