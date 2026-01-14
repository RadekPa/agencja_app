import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserParamsOrderByWithRelationInputObjectSchema as tblUserParamsOrderByWithRelationInputObjectSchema } from './objects/tblUserParamsOrderByWithRelationInput.schema';
import { tblUserParamsWhereInputObjectSchema as tblUserParamsWhereInputObjectSchema } from './objects/tblUserParamsWhereInput.schema';
import { tblUserParamsWhereUniqueInputObjectSchema as tblUserParamsWhereUniqueInputObjectSchema } from './objects/tblUserParamsWhereUniqueInput.schema';
import { TblUserParamsCountAggregateInputObjectSchema as TblUserParamsCountAggregateInputObjectSchema } from './objects/TblUserParamsCountAggregateInput.schema';

export const tblUserParamsCountSchema: z.ZodType<Prisma.tblUserParamsCountArgs> = z.object({ orderBy: z.union([tblUserParamsOrderByWithRelationInputObjectSchema, tblUserParamsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserParamsWhereInputObjectSchema.optional(), cursor: tblUserParamsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblUserParamsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblUserParamsCountArgs>;

export const tblUserParamsCountZodSchema = z.object({ orderBy: z.union([tblUserParamsOrderByWithRelationInputObjectSchema, tblUserParamsOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserParamsWhereInputObjectSchema.optional(), cursor: tblUserParamsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblUserParamsCountAggregateInputObjectSchema ]).optional() }).strict();