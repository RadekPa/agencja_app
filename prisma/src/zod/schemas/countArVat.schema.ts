import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArVatOrderByWithRelationInputObjectSchema as ArVatOrderByWithRelationInputObjectSchema } from './objects/ArVatOrderByWithRelationInput.schema';
import { ArVatWhereInputObjectSchema as ArVatWhereInputObjectSchema } from './objects/ArVatWhereInput.schema';
import { ArVatWhereUniqueInputObjectSchema as ArVatWhereUniqueInputObjectSchema } from './objects/ArVatWhereUniqueInput.schema';
import { ArVatCountAggregateInputObjectSchema as ArVatCountAggregateInputObjectSchema } from './objects/ArVatCountAggregateInput.schema';

export const ArVatCountSchema: z.ZodType<Prisma.ArVatCountArgs> = z.object({ orderBy: z.union([ArVatOrderByWithRelationInputObjectSchema, ArVatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArVatWhereInputObjectSchema.optional(), cursor: ArVatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArVatCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ArVatCountArgs>;

export const ArVatCountZodSchema = z.object({ orderBy: z.union([ArVatOrderByWithRelationInputObjectSchema, ArVatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArVatWhereInputObjectSchema.optional(), cursor: ArVatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArVatCountAggregateInputObjectSchema ]).optional() }).strict();