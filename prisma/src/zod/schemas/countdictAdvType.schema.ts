import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeOrderByWithRelationInputObjectSchema as dictAdvTypeOrderByWithRelationInputObjectSchema } from './objects/dictAdvTypeOrderByWithRelationInput.schema';
import { dictAdvTypeWhereInputObjectSchema as dictAdvTypeWhereInputObjectSchema } from './objects/dictAdvTypeWhereInput.schema';
import { dictAdvTypeWhereUniqueInputObjectSchema as dictAdvTypeWhereUniqueInputObjectSchema } from './objects/dictAdvTypeWhereUniqueInput.schema';
import { DictAdvTypeCountAggregateInputObjectSchema as DictAdvTypeCountAggregateInputObjectSchema } from './objects/DictAdvTypeCountAggregateInput.schema';

export const dictAdvTypeCountSchema: z.ZodType<Prisma.dictAdvTypeCountArgs> = z.object({ orderBy: z.union([dictAdvTypeOrderByWithRelationInputObjectSchema, dictAdvTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTypeWhereInputObjectSchema.optional(), cursor: dictAdvTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictAdvTypeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeCountArgs>;

export const dictAdvTypeCountZodSchema = z.object({ orderBy: z.union([dictAdvTypeOrderByWithRelationInputObjectSchema, dictAdvTypeOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAdvTypeWhereInputObjectSchema.optional(), cursor: dictAdvTypeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictAdvTypeCountAggregateInputObjectSchema ]).optional() }).strict();