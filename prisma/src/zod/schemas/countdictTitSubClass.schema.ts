import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTitSubClassOrderByWithRelationInputObjectSchema as dictTitSubClassOrderByWithRelationInputObjectSchema } from './objects/dictTitSubClassOrderByWithRelationInput.schema';
import { dictTitSubClassWhereInputObjectSchema as dictTitSubClassWhereInputObjectSchema } from './objects/dictTitSubClassWhereInput.schema';
import { dictTitSubClassWhereUniqueInputObjectSchema as dictTitSubClassWhereUniqueInputObjectSchema } from './objects/dictTitSubClassWhereUniqueInput.schema';
import { DictTitSubClassCountAggregateInputObjectSchema as DictTitSubClassCountAggregateInputObjectSchema } from './objects/DictTitSubClassCountAggregateInput.schema';

export const dictTitSubClassCountSchema: z.ZodType<Prisma.dictTitSubClassCountArgs> = z.object({ orderBy: z.union([dictTitSubClassOrderByWithRelationInputObjectSchema, dictTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTitSubClassWhereInputObjectSchema.optional(), cursor: dictTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictTitSubClassCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictTitSubClassCountArgs>;

export const dictTitSubClassCountZodSchema = z.object({ orderBy: z.union([dictTitSubClassOrderByWithRelationInputObjectSchema, dictTitSubClassOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictTitSubClassWhereInputObjectSchema.optional(), cursor: dictTitSubClassWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictTitSubClassCountAggregateInputObjectSchema ]).optional() }).strict();