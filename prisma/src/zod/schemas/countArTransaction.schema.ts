import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionOrderByWithRelationInputObjectSchema as ArTransactionOrderByWithRelationInputObjectSchema } from './objects/ArTransactionOrderByWithRelationInput.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './objects/ArTransactionWhereInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './objects/ArTransactionWhereUniqueInput.schema';
import { ArTransactionCountAggregateInputObjectSchema as ArTransactionCountAggregateInputObjectSchema } from './objects/ArTransactionCountAggregateInput.schema';

export const ArTransactionCountSchema: z.ZodType<Prisma.ArTransactionCountArgs> = z.object({ orderBy: z.union([ArTransactionOrderByWithRelationInputObjectSchema, ArTransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionWhereInputObjectSchema.optional(), cursor: ArTransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArTransactionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionCountArgs>;

export const ArTransactionCountZodSchema = z.object({ orderBy: z.union([ArTransactionOrderByWithRelationInputObjectSchema, ArTransactionOrderByWithRelationInputObjectSchema.array()]).optional(), where: ArTransactionWhereInputObjectSchema.optional(), cursor: ArTransactionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ArTransactionCountAggregateInputObjectSchema ]).optional() }).strict();