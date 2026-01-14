import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesOrderByWithRelationInputObjectSchema as dictRepModesOrderByWithRelationInputObjectSchema } from './objects/dictRepModesOrderByWithRelationInput.schema';
import { dictRepModesWhereInputObjectSchema as dictRepModesWhereInputObjectSchema } from './objects/dictRepModesWhereInput.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './objects/dictRepModesWhereUniqueInput.schema';
import { DictRepModesCountAggregateInputObjectSchema as DictRepModesCountAggregateInputObjectSchema } from './objects/DictRepModesCountAggregateInput.schema';

export const dictRepModesCountSchema: z.ZodType<Prisma.dictRepModesCountArgs> = z.object({ orderBy: z.union([dictRepModesOrderByWithRelationInputObjectSchema, dictRepModesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRepModesWhereInputObjectSchema.optional(), cursor: dictRepModesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictRepModesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.dictRepModesCountArgs>;

export const dictRepModesCountZodSchema = z.object({ orderBy: z.union([dictRepModesOrderByWithRelationInputObjectSchema, dictRepModesOrderByWithRelationInputObjectSchema.array()]).optional(), where: dictRepModesWhereInputObjectSchema.optional(), cursor: dictRepModesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DictRepModesCountAggregateInputObjectSchema ]).optional() }).strict();