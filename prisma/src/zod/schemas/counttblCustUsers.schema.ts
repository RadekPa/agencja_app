import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustUsersOrderByWithRelationInputObjectSchema as tblCustUsersOrderByWithRelationInputObjectSchema } from './objects/tblCustUsersOrderByWithRelationInput.schema';
import { tblCustUsersWhereInputObjectSchema as tblCustUsersWhereInputObjectSchema } from './objects/tblCustUsersWhereInput.schema';
import { tblCustUsersWhereUniqueInputObjectSchema as tblCustUsersWhereUniqueInputObjectSchema } from './objects/tblCustUsersWhereUniqueInput.schema';
import { TblCustUsersCountAggregateInputObjectSchema as TblCustUsersCountAggregateInputObjectSchema } from './objects/TblCustUsersCountAggregateInput.schema';

export const tblCustUsersCountSchema: z.ZodType<Prisma.tblCustUsersCountArgs> = z.object({ orderBy: z.union([tblCustUsersOrderByWithRelationInputObjectSchema, tblCustUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustUsersWhereInputObjectSchema.optional(), cursor: tblCustUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustUsersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblCustUsersCountArgs>;

export const tblCustUsersCountZodSchema = z.object({ orderBy: z.union([tblCustUsersOrderByWithRelationInputObjectSchema, tblCustUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblCustUsersWhereInputObjectSchema.optional(), cursor: tblCustUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblCustUsersCountAggregateInputObjectSchema ]).optional() }).strict();