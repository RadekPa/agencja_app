import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictXRatesOrderByWithRelationInputObjectSchema as dictXRatesOrderByWithRelationInputObjectSchema } from './objects/dictXRatesOrderByWithRelationInput.schema';
import { dictXRatesWhereInputObjectSchema as dictXRatesWhereInputObjectSchema } from './objects/dictXRatesWhereInput.schema';
import { dictXRatesWhereUniqueInputObjectSchema as dictXRatesWhereUniqueInputObjectSchema } from './objects/dictXRatesWhereUniqueInput.schema';
import { DictXRatesCountAggregateInputObjectSchema as DictXRatesCountAggregateInputObjectSchema } from './objects/DictXRatesCountAggregateInput.schema';

export const dictXRatesCountSchema: z.ZodType<Prisma.dictXRatesCountArgs> = z.object({ orderBy: z.union([dictXRatesOrderByWithRelationInputObjectSchema, dictXRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictXRatesWhereInputObjectSchema.optional(), cursor: dictXRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictXRatesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictXRatesCountArgs>;

export const dictXRatesCountZodSchema = z.object({ orderBy: z.union([dictXRatesOrderByWithRelationInputObjectSchema, dictXRatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictXRatesWhereInputObjectSchema.optional(), cursor: dictXRatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictXRatesCountAggregateInputObjectSchema ]).optional() }).strict();