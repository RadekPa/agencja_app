import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermOrderByWithRelationInputObjectSchema as dictAdvTermOrderByWithRelationInputObjectSchema } from './objects/dictAdvTermOrderByWithRelationInput.schema';
import { dictAdvTermWhereInputObjectSchema as dictAdvTermWhereInputObjectSchema } from './objects/dictAdvTermWhereInput.schema';
import { dictAdvTermWhereUniqueInputObjectSchema as dictAdvTermWhereUniqueInputObjectSchema } from './objects/dictAdvTermWhereUniqueInput.schema';
import { DictAdvTermCountAggregateInputObjectSchema as DictAdvTermCountAggregateInputObjectSchema } from './objects/DictAdvTermCountAggregateInput.schema';

export const dictAdvTermCountSchema: z.ZodType<Prisma.dictAdvTermCountArgs> = z.object({ orderBy: z.union([dictAdvTermOrderByWithRelationInputObjectSchema, dictAdvTermOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTermWhereInputObjectSchema.optional(), cursor: dictAdvTermWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictAdvTermCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTermCountArgs>;

export const dictAdvTermCountZodSchema = z.object({ orderBy: z.union([dictAdvTermOrderByWithRelationInputObjectSchema, dictAdvTermOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTermWhereInputObjectSchema.optional(), cursor: dictAdvTermWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictAdvTermCountAggregateInputObjectSchema ]).optional() }).strict();