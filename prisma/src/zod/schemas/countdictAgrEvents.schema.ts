import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrEventsOrderByWithRelationInputObjectSchema as dictAgrEventsOrderByWithRelationInputObjectSchema } from './objects/dictAgrEventsOrderByWithRelationInput.schema';
import { dictAgrEventsWhereInputObjectSchema as dictAgrEventsWhereInputObjectSchema } from './objects/dictAgrEventsWhereInput.schema';
import { dictAgrEventsWhereUniqueInputObjectSchema as dictAgrEventsWhereUniqueInputObjectSchema } from './objects/dictAgrEventsWhereUniqueInput.schema';
import { DictAgrEventsCountAggregateInputObjectSchema as DictAgrEventsCountAggregateInputObjectSchema } from './objects/DictAgrEventsCountAggregateInput.schema';

export const dictAgrEventsCountSchema: z.ZodType<Prisma.dictAgrEventsCountArgs> = z.object({ orderBy: z.union([dictAgrEventsOrderByWithRelationInputObjectSchema, dictAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAgrEventsWhereInputObjectSchema.optional(), cursor: dictAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictAgrEventsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictAgrEventsCountArgs>;

export const dictAgrEventsCountZodSchema = z.object({ orderBy: z.union([dictAgrEventsOrderByWithRelationInputObjectSchema, dictAgrEventsOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictAgrEventsWhereInputObjectSchema.optional(), cursor: dictAgrEventsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictAgrEventsCountAggregateInputObjectSchema ]).optional() }).strict();