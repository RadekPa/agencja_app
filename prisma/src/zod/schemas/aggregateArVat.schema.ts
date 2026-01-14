import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatOrderByWithRelationInputObjectSchema as ArVatOrderByWithRelationInputObjectSchema } from './objects/ArVatOrderByWithRelationInput.schema';
import { ArVatWhereInputObjectSchema as ArVatWhereInputObjectSchema } from './objects/ArVatWhereInput.schema';
import { ArVatWhereUniqueInputObjectSchema as ArVatWhereUniqueInputObjectSchema } from './objects/ArVatWhereUniqueInput.schema';
import { ArVatCountAggregateInputObjectSchema as ArVatCountAggregateInputObjectSchema } from './objects/ArVatCountAggregateInput.schema';
import { ArVatMinAggregateInputObjectSchema as ArVatMinAggregateInputObjectSchema } from './objects/ArVatMinAggregateInput.schema';
import { ArVatMaxAggregateInputObjectSchema as ArVatMaxAggregateInputObjectSchema } from './objects/ArVatMaxAggregateInput.schema';
import { ArVatAvgAggregateInputObjectSchema as ArVatAvgAggregateInputObjectSchema } from './objects/ArVatAvgAggregateInput.schema';
import { ArVatSumAggregateInputObjectSchema as ArVatSumAggregateInputObjectSchema } from './objects/ArVatSumAggregateInput.schema';

export const ArVatAggregateSchema: z.ZodType<Prisma.ArVatAggregateArgs> = z.object({ orderBy: z.union([ArVatOrderByWithRelationInputObjectSchema, ArVatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArVatWhereInputObjectSchema.optional(), cursor: ArVatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ArVatCountAggregateInputObjectSchema ]).optional(), _min: ArVatMinAggregateInputObjectSchema.optional(), _max: ArVatMaxAggregateInputObjectSchema.optional(), _avg: ArVatAvgAggregateInputObjectSchema.optional(), _sum: ArVatSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArVatAggregateArgs>;

export const ArVatAggregateZodSchema = z.object({ orderBy: z.union([ArVatOrderByWithRelationInputObjectSchema, ArVatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArVatWhereInputObjectSchema.optional(), cursor: ArVatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ArVatCountAggregateInputObjectSchema ]).optional(), _min: ArVatMinAggregateInputObjectSchema.optional(), _max: ArVatMaxAggregateInputObjectSchema.optional(), _avg: ArVatAvgAggregateInputObjectSchema.optional(), _sum: ArVatSumAggregateInputObjectSchema.optional() }).strict();