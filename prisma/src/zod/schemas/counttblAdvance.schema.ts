import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAdvanceOrderByWithRelationInputObjectSchema as tblAdvanceOrderByWithRelationInputObjectSchema } from './objects/tblAdvanceOrderByWithRelationInput.schema';
import { tblAdvanceWhereInputObjectSchema as tblAdvanceWhereInputObjectSchema } from './objects/tblAdvanceWhereInput.schema';
import { tblAdvanceWhereUniqueInputObjectSchema as tblAdvanceWhereUniqueInputObjectSchema } from './objects/tblAdvanceWhereUniqueInput.schema';
import { TblAdvanceCountAggregateInputObjectSchema as TblAdvanceCountAggregateInputObjectSchema } from './objects/TblAdvanceCountAggregateInput.schema';

export const tblAdvanceCountSchema: z.ZodType<Prisma.tblAdvanceCountArgs> = z.object({ orderBy: z.union([tblAdvanceOrderByWithRelationInputObjectSchema, tblAdvanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAdvanceWhereInputObjectSchema.optional(), cursor: tblAdvanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAdvanceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblAdvanceCountArgs>;

export const tblAdvanceCountZodSchema = z.object({ orderBy: z.union([tblAdvanceOrderByWithRelationInputObjectSchema, tblAdvanceOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblAdvanceWhereInputObjectSchema.optional(), cursor: tblAdvanceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblAdvanceCountAggregateInputObjectSchema ]).optional() }).strict();