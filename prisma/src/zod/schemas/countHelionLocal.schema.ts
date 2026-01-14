import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { HelionLocalOrderByWithRelationInputObjectSchema as HelionLocalOrderByWithRelationInputObjectSchema } from './objects/HelionLocalOrderByWithRelationInput.schema';
import { HelionLocalWhereInputObjectSchema as HelionLocalWhereInputObjectSchema } from './objects/HelionLocalWhereInput.schema';
import { HelionLocalWhereUniqueInputObjectSchema as HelionLocalWhereUniqueInputObjectSchema } from './objects/HelionLocalWhereUniqueInput.schema';
import { HelionLocalCountAggregateInputObjectSchema as HelionLocalCountAggregateInputObjectSchema } from './objects/HelionLocalCountAggregateInput.schema';

export const HelionLocalCountSchema: z.ZodType<Prisma.HelionLocalCountArgs> = z.object({ orderBy: z.union([HelionLocalOrderByWithRelationInputObjectSchema, HelionLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: HelionLocalWhereInputObjectSchema.optional(), cursor: HelionLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HelionLocalCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.HelionLocalCountArgs>;

export const HelionLocalCountZodSchema = z.object({ orderBy: z.union([HelionLocalOrderByWithRelationInputObjectSchema, HelionLocalOrderByWithRelationInputObjectSchema.array()]).optional(), where: HelionLocalWhereInputObjectSchema.optional(), cursor: HelionLocalWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), HelionLocalCountAggregateInputObjectSchema ]).optional() }).strict();