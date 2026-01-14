import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblUsersOrderByWithRelationInputObjectSchema as tblUsersOrderByWithRelationInputObjectSchema } from './objects/tblUsersOrderByWithRelationInput.schema';
import { tblUsersWhereInputObjectSchema as tblUsersWhereInputObjectSchema } from './objects/tblUsersWhereInput.schema';
import { tblUsersWhereUniqueInputObjectSchema as tblUsersWhereUniqueInputObjectSchema } from './objects/tblUsersWhereUniqueInput.schema';
import { TblUsersCountAggregateInputObjectSchema as TblUsersCountAggregateInputObjectSchema } from './objects/TblUsersCountAggregateInput.schema';

export const tblUsersCountSchema: z.ZodType<Prisma.tblUsersCountArgs> = z.object({ orderBy: z.union([tblUsersOrderByWithRelationInputObjectSchema, tblUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUsersWhereInputObjectSchema.optional(), cursor: tblUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblUsersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tblUsersCountArgs>;

export const tblUsersCountZodSchema = z.object({ orderBy: z.union([tblUsersOrderByWithRelationInputObjectSchema, tblUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: tblUsersWhereInputObjectSchema.optional(), cursor: tblUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TblUsersCountAggregateInputObjectSchema ]).optional() }).strict();