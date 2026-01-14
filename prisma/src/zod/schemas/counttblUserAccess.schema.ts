import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUserAccessOrderByWithRelationInputObjectSchema as tblUserAccessOrderByWithRelationInputObjectSchema } from './objects/tblUserAccessOrderByWithRelationInput.schema';
import { tblUserAccessWhereInputObjectSchema as tblUserAccessWhereInputObjectSchema } from './objects/tblUserAccessWhereInput.schema';
import { tblUserAccessWhereUniqueInputObjectSchema as tblUserAccessWhereUniqueInputObjectSchema } from './objects/tblUserAccessWhereUniqueInput.schema';
import { TblUserAccessCountAggregateInputObjectSchema as TblUserAccessCountAggregateInputObjectSchema } from './objects/TblUserAccessCountAggregateInput.schema';

export const tblUserAccessCountSchema: z.ZodType<Prisma.tblUserAccessCountArgs> = z.object({ orderBy: z.union([tblUserAccessOrderByWithRelationInputObjectSchema, tblUserAccessOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserAccessWhereInputObjectSchema.optional(), cursor: tblUserAccessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblUserAccessCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblUserAccessCountArgs>;

export const tblUserAccessCountZodSchema = z.object({ orderBy: z.union([tblUserAccessOrderByWithRelationInputObjectSchema, tblUserAccessOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUserAccessWhereInputObjectSchema.optional(), cursor: tblUserAccessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblUserAccessCountAggregateInputObjectSchema ]).optional() }).strict();