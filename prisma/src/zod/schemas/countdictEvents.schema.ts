import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictEventsOrderByWithRelationInputObjectSchema as dictEventsOrderByWithRelationInputObjectSchema } from './objects/dictEventsOrderByWithRelationInput.schema';
import { dictEventsWhereInputObjectSchema as dictEventsWhereInputObjectSchema } from './objects/dictEventsWhereInput.schema';
import { dictEventsWhereUniqueInputObjectSchema as dictEventsWhereUniqueInputObjectSchema } from './objects/dictEventsWhereUniqueInput.schema';
import { DictEventsCountAggregateInputObjectSchema as DictEventsCountAggregateInputObjectSchema } from './objects/DictEventsCountAggregateInput.schema';

export const dictEventsCountSchema: z.ZodType<Prisma.dictEventsCountArgs> = z.object({ orderBy: z.union([dictEventsOrderByWithRelationInputObjectSchema, dictEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictEventsWhereInputObjectSchema.optional(), cursor: dictEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictEventsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictEventsCountArgs>;

export const dictEventsCountZodSchema = z.object({ orderBy: z.union([dictEventsOrderByWithRelationInputObjectSchema, dictEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictEventsWhereInputObjectSchema.optional(), cursor: dictEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictEventsCountAggregateInputObjectSchema ]).optional() }).strict();