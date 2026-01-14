import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatWhereInputObjectSchema as ArVatWhereInputObjectSchema } from './objects/ArVatWhereInput.schema';
import { ArVatOrderByWithAggregationInputObjectSchema as ArVatOrderByWithAggregationInputObjectSchema } from './objects/ArVatOrderByWithAggregationInput.schema';
import { ArVatScalarWhereWithAggregatesInputObjectSchema as ArVatScalarWhereWithAggregatesInputObjectSchema } from './objects/ArVatScalarWhereWithAggregatesInput.schema';
import { ArVatScalarFieldEnumSchema } from './enums/ArVatScalarFieldEnum.schema';
import { ArVatCountAggregateInputObjectSchema as ArVatCountAggregateInputObjectSchema } from './objects/ArVatCountAggregateInput.schema';
import { ArVatMinAggregateInputObjectSchema as ArVatMinAggregateInputObjectSchema } from './objects/ArVatMinAggregateInput.schema';
import { ArVatMaxAggregateInputObjectSchema as ArVatMaxAggregateInputObjectSchema } from './objects/ArVatMaxAggregateInput.schema';
import { ArVatAvgAggregateInputObjectSchema as ArVatAvgAggregateInputObjectSchema } from './objects/ArVatAvgAggregateInput.schema';
import { ArVatSumAggregateInputObjectSchema as ArVatSumAggregateInputObjectSchema } from './objects/ArVatSumAggregateInput.schema';

export const ArVatGroupBySchema: z.ZodType<Prisma.ArVatGroupByArgs> = z.object({ where: ArVatWhereInputObjectSchema.optional(), orderBy: z.union([ArVatOrderByWithAggregationInputObjectSchema, ArVatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ArVatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ArVatScalarFieldEnumSchema), _count: z.union([ z.literal(true), ArVatCountAggregateInputObjectSchema ]).optional(), _min: ArVatMinAggregateInputObjectSchema.optional(), _max: ArVatMaxAggregateInputObjectSchema.optional(), _avg: ArVatAvgAggregateInputObjectSchema.optional(), _sum: ArVatSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArVatGroupByArgs>;

export const ArVatGroupByZodSchema = z.object({ where: ArVatWhereInputObjectSchema.optional(), orderBy: z.union([ArVatOrderByWithAggregationInputObjectSchema, ArVatOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ArVatScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ArVatScalarFieldEnumSchema), _count: z.union([ z.literal(true), ArVatCountAggregateInputObjectSchema ]).optional(), _min: ArVatMinAggregateInputObjectSchema.optional(), _max: ArVatMaxAggregateInputObjectSchema.optional(), _avg: ArVatAvgAggregateInputObjectSchema.optional(), _sum: ArVatSumAggregateInputObjectSchema.optional() }).strict();