import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PearsonMaterialOrderByWithRelationInputObjectSchema as PearsonMaterialOrderByWithRelationInputObjectSchema } from './objects/PearsonMaterialOrderByWithRelationInput.schema';
import { PearsonMaterialWhereInputObjectSchema as PearsonMaterialWhereInputObjectSchema } from './objects/PearsonMaterialWhereInput.schema';
import { PearsonMaterialWhereUniqueInputObjectSchema as PearsonMaterialWhereUniqueInputObjectSchema } from './objects/PearsonMaterialWhereUniqueInput.schema';
import { PearsonMaterialCountAggregateInputObjectSchema as PearsonMaterialCountAggregateInputObjectSchema } from './objects/PearsonMaterialCountAggregateInput.schema';

export const PearsonMaterialCountSchema: z.ZodType<Prisma.PearsonMaterialCountArgs> = z.object({ orderBy: z.union([PearsonMaterialOrderByWithRelationInputObjectSchema, PearsonMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: PearsonMaterialWhereInputObjectSchema.optional(), cursor: PearsonMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PearsonMaterialCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.PearsonMaterialCountArgs>;

export const PearsonMaterialCountZodSchema = z.object({ orderBy: z.union([PearsonMaterialOrderByWithRelationInputObjectSchema, PearsonMaterialOrderByWithRelationInputObjectSchema.array()]).optional(), where: PearsonMaterialWhereInputObjectSchema.optional(), cursor: PearsonMaterialWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PearsonMaterialCountAggregateInputObjectSchema ]).optional() }).strict();