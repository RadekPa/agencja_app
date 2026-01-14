import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesOrderByWithRelationInputObjectSchema as dictCustTypesOrderByWithRelationInputObjectSchema } from './objects/dictCustTypesOrderByWithRelationInput.schema';
import { dictCustTypesWhereInputObjectSchema as dictCustTypesWhereInputObjectSchema } from './objects/dictCustTypesWhereInput.schema';
import { dictCustTypesWhereUniqueInputObjectSchema as dictCustTypesWhereUniqueInputObjectSchema } from './objects/dictCustTypesWhereUniqueInput.schema';
import { DictCustTypesCountAggregateInputObjectSchema as DictCustTypesCountAggregateInputObjectSchema } from './objects/DictCustTypesCountAggregateInput.schema';

export const dictCustTypesCountSchema: z.ZodType<Prisma.dictCustTypesCountArgs> = z.object({ orderBy: z.union([dictCustTypesOrderByWithRelationInputObjectSchema, dictCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCustTypesWhereInputObjectSchema.optional(), cursor: dictCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCustTypesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCustTypesCountArgs>;

export const dictCustTypesCountZodSchema = z.object({ orderBy: z.union([dictCustTypesOrderByWithRelationInputObjectSchema, dictCustTypesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCustTypesWhereInputObjectSchema.optional(), cursor: dictCustTypesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCustTypesCountAggregateInputObjectSchema ]).optional() }).strict();