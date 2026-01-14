import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansOrderByWithRelationInputObjectSchema as pdxBilansOrderByWithRelationInputObjectSchema } from './objects/pdxBilansOrderByWithRelationInput.schema';
import { pdxBilansWhereInputObjectSchema as pdxBilansWhereInputObjectSchema } from './objects/pdxBilansWhereInput.schema';
import { pdxBilansWhereUniqueInputObjectSchema as pdxBilansWhereUniqueInputObjectSchema } from './objects/pdxBilansWhereUniqueInput.schema';
import { PdxBilansCountAggregateInputObjectSchema as PdxBilansCountAggregateInputObjectSchema } from './objects/PdxBilansCountAggregateInput.schema';

export const pdxBilansCountSchema: z.ZodType<Prisma.pdxBilansCountArgs> = z.object({ orderBy: z.union([pdxBilansOrderByWithRelationInputObjectSchema, pdxBilansOrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxBilansWhereInputObjectSchema.optional(), cursor: pdxBilansWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PdxBilansCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.pdxBilansCountArgs>;

export const pdxBilansCountZodSchema = z.object({ orderBy: z.union([pdxBilansOrderByWithRelationInputObjectSchema, pdxBilansOrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxBilansWhereInputObjectSchema.optional(), cursor: pdxBilansWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PdxBilansCountAggregateInputObjectSchema ]).optional() }).strict();