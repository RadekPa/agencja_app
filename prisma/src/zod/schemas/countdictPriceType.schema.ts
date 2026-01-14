import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictPriceTypeOrderByWithRelationInputObjectSchema as dictPriceTypeOrderByWithRelationInputObjectSchema } from './objects/dictPriceTypeOrderByWithRelationInput.schema';
import { dictPriceTypeWhereInputObjectSchema as dictPriceTypeWhereInputObjectSchema } from './objects/dictPriceTypeWhereInput.schema';
import { dictPriceTypeWhereUniqueInputObjectSchema as dictPriceTypeWhereUniqueInputObjectSchema } from './objects/dictPriceTypeWhereUniqueInput.schema';
import { DictPriceTypeCountAggregateInputObjectSchema as DictPriceTypeCountAggregateInputObjectSchema } from './objects/DictPriceTypeCountAggregateInput.schema';

export const dictPriceTypeCountSchema: z.ZodType<Prisma.dictPriceTypeCountArgs> = z.object({ orderBy: z.union([dictPriceTypeOrderByWithRelationInputObjectSchema, dictPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictPriceTypeWhereInputObjectSchema.optional(), cursor: dictPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictPriceTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictPriceTypeCountArgs>;

export const dictPriceTypeCountZodSchema = z.object({ orderBy: z.union([dictPriceTypeOrderByWithRelationInputObjectSchema, dictPriceTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictPriceTypeWhereInputObjectSchema.optional(), cursor: dictPriceTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictPriceTypeCountAggregateInputObjectSchema ]).optional() }).strict();