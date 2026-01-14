import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCurrenciesOrderByWithRelationInputObjectSchema as dictCurrenciesOrderByWithRelationInputObjectSchema } from './objects/dictCurrenciesOrderByWithRelationInput.schema';
import { dictCurrenciesWhereInputObjectSchema as dictCurrenciesWhereInputObjectSchema } from './objects/dictCurrenciesWhereInput.schema';
import { dictCurrenciesWhereUniqueInputObjectSchema as dictCurrenciesWhereUniqueInputObjectSchema } from './objects/dictCurrenciesWhereUniqueInput.schema';
import { DictCurrenciesCountAggregateInputObjectSchema as DictCurrenciesCountAggregateInputObjectSchema } from './objects/DictCurrenciesCountAggregateInput.schema';

export const dictCurrenciesCountSchema: z.ZodType<Prisma.dictCurrenciesCountArgs> = z.object({ orderBy: z.union([dictCurrenciesOrderByWithRelationInputObjectSchema, dictCurrenciesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCurrenciesWhereInputObjectSchema.optional(), cursor: dictCurrenciesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCurrenciesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictCurrenciesCountArgs>;

export const dictCurrenciesCountZodSchema = z.object({ orderBy: z.union([dictCurrenciesOrderByWithRelationInputObjectSchema, dictCurrenciesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictCurrenciesWhereInputObjectSchema.optional(), cursor: dictCurrenciesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictCurrenciesCountAggregateInputObjectSchema ]).optional() }).strict();