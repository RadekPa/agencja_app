import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxTRANSFEROrderByWithRelationInputObjectSchema as pdxTRANSFEROrderByWithRelationInputObjectSchema } from './objects/pdxTRANSFEROrderByWithRelationInput.schema';
import { pdxTRANSFERWhereInputObjectSchema as pdxTRANSFERWhereInputObjectSchema } from './objects/pdxTRANSFERWhereInput.schema';
import { pdxTRANSFERWhereUniqueInputObjectSchema as pdxTRANSFERWhereUniqueInputObjectSchema } from './objects/pdxTRANSFERWhereUniqueInput.schema';
import { PdxTRANSFERCountAggregateInputObjectSchema as PdxTRANSFERCountAggregateInputObjectSchema } from './objects/PdxTRANSFERCountAggregateInput.schema';

export const pdxTRANSFERCountSchema: z.ZodType<Prisma.pdxTRANSFERCountArgs> = z.object({ orderBy: z.union([pdxTRANSFEROrderByWithRelationInputObjectSchema, pdxTRANSFEROrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxTRANSFERWhereInputObjectSchema.optional(), cursor: pdxTRANSFERWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PdxTRANSFERCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.pdxTRANSFERCountArgs>;

export const pdxTRANSFERCountZodSchema = z.object({ orderBy: z.union([pdxTRANSFEROrderByWithRelationInputObjectSchema, pdxTRANSFEROrderByWithRelationInputObjectSchema.array()]).optional(), where: pdxTRANSFERWhereInputObjectSchema.optional(), cursor: pdxTRANSFERWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PdxTRANSFERCountAggregateInputObjectSchema ]).optional() }).strict();